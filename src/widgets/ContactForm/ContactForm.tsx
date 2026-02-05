import { BaseCard } from "../../components/Card/Card";

import image from "../../assets/contact-us/Illustration (6).png"
import { Input } from "../../components/Input/Input";
import { useRef, useState } from "react";
import { ToggleSwitch } from "../../components/ToggleSwitch/ToggleSwitch";
import { TextArea } from "../../components/TextArea/TextArea";
import styles from './form.module.css'
import { SubmitButton } from "../../components/SubmitButton/SubmitButton";
import { delay } from "../../utils/delay";

type ToggleType = 'sayHi' | 'getAQuote';

export const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [toggleValue, setToggleValue] = useState<ToggleType>('sayHi');
    const formRef = useRef<HTMLFormElement>(null);


    const handleToggleChange = (toggleName: string) => {
        const toggleValue = toggleName.replace('toggle', '');
        const formattedToggleValue = toggleValue.charAt(0).toLocaleLowerCase() + toggleValue.slice(1);
        setToggleValue(formattedToggleValue as ToggleType);
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        
        if (formRef.current) {
            const formData = new FormData(formRef.current);
            const data = {
                name: formData.get('name') as string,
                email: formData.get('email') as string,
                message: formData.get('message') as string,
                toggle: toggleValue as ToggleType
            };
            
            console.log(data);
        }
        
        await delay(1000);
        setIsLoading(false);
    };

    return (
        <BaseCard 
            className={`bg-F3F3F3 ${styles.card}`}   
        >
            <div className={styles.form_container}>
                <form ref={formRef} className="form" onSubmit={handleSubmit}>
                    <div className={styles.form_toggles}>
                        <ToggleSwitch
                            id="toggleSayHi"
                            label="Say Hi"
                            checked={toggleValue  === 'sayHi'}
                            onClick={handleToggleChange}
                        />
                        <ToggleSwitch
                            id="toggleGetAQuote"
                            label="Get a Quote"
                            checked={toggleValue  === 'getAQuote'}
                            onClick={handleToggleChange}
                        />
                    </div>
                    <div className={styles.form_inputs}>
                        <div className={styles.input_with_label}>
                            <span className={styles.label}>Name</span>
                            <Input
                                name="name"
                                label="Name"
                                type="text"
                                placeholder="Enter your name"
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.input_with_label}>
                            <span className={styles.label}>Email*</span>
                            <Input
                                name="email"
                                label="Email"
                                type="email"
                                className={styles.input}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className={styles.input_with_label}>
                            <span className={styles.label}>Message*</span>
                            <TextArea
                                name="message"
                                placeholder="Enter your message"
                                className={styles.input}
                                required
                            />
                        </div>
                    </div>
                    <SubmitButton label={"Send Message"} className={styles.btn} onClick={() => handleSubmit} isLoading={isLoading}/>
                </form>
                <img src={image} alt="" />
            </div>
        </BaseCard>
    );
}

