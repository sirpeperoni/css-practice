import { useState } from "react";
import { Button } from "./Button"
import { Card } from "./Card"
import { Input } from "./Input";


export const FooterForm = () => {
    const [formData, setFormData] = useState({
        email: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log(formData);   
    };


    return (
        <div className="footer-form-container">
            <Card 
                paddingVertical={40}
                paddingHorizontal={58}
                borderRadius="14px"
                backgroundColor={"BG-292A32"}
            >
                <form className="footer-form" onSubmit={handleSubmit}>
                    <Input 
                        name={"email"} 
                        label={""} 
                        placeholder={"Email"} 
                        value={formData.email} 
                        onChange={handleInputChange}
                        labelRequired={false}
                        additionalClassInput="footer-form-input"
                        additionalInputContainerClass="footer-form-input-container"
                    />
                    <Button 
                        normalBackgroundColor={"#B9FF66"} 
                        normalTextColor={"#191A23"} 
                        hoverBackgroundColor={"#FFF"} 
                        hoverTextColor={""}
                        additionalClasses={"footer-form-btn"}
                    >
                        Subscribe to news
                    </Button>
                </form>
            </Card>
        </div>
    )
}