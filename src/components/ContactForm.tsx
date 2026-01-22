import { Card } from "./Card";

import image from "../assets/contact-us/Illustration (6).png"
import { Input } from "./Input";
import { useState } from "react";
import { ToggleSwitch } from "./ToggleSwitch";
import { TextArea } from "./TextArea";
import { Button } from "./Button";


export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        toggles: {
            toggleSayHi: true,
            toggleGetAQuote: false
        }    
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

    };

    const handleToggleChange = (toggleName: string) => {
        
        setFormData(prev => ({
            ...prev,
            toggles: {
                ...(Object.fromEntries(
                    Object.keys(prev.toggles).map(key => [key, false])
                ) as any),
                [toggleName]: true
            }
            
        }));
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log(formData);

            
    };

    return (
        <Card 
            backgroundColor={"bg-F3F3F3"}   
            paddingHorizontal={100}
            paddingVertical={80}     
        >
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-toggles">
                        <ToggleSwitch
                            id="toggleSayHi"
                            label="Say Hi"
                            checked={formData.toggles.toggleSayHi}
                            onClick={handleToggleChange}
                        />
                        <ToggleSwitch
                            id="toggleGetAQuote"
                            label="Get a Quote"
                            checked={formData.toggles.toggleGetAQuote}
                            onClick={handleToggleChange}
                        />
                    </div>
                    <div className="form-inputs">
                        <Input
                            name="name"
                            label="Name"
                            type="text"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />

                        <Input
                            name="email"
                            label="Email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                        <TextArea
                            name="message"
                            label="Message"
                            placeholder="Enter your message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <Button
                        normalBackgroundColor="#191A23"
                        type="submit"  
                        normalTextColor={"WHITE"} 
                        hoverBackgroundColor={"#B9FF66"} 
                        hoverTextColor={""}>
                            Send Message
                    </Button>
                </form>
                <img src={image} alt="" />
            </div>
        </Card>
    );
}