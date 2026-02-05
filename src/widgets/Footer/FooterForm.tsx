import { useState } from "react";
import { Button } from "../../components/Button/Button"
import { BaseCard } from "../../components/Card/Card"
import { Input } from "../../components/Input/Input";
import styles from './footer.module.css'
import { SubmitButton } from "../../components/SubmitButton/SubmitButton";
import { delay } from "../../utils/delay";

export const FooterForm = () => {
    const [isLoading, setIsLoading] = useState(false)
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


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true)
        await delay(1000);
        console.log(formData);
        setIsLoading(false)
    };


    return (
        <div className={styles.form_container}>
            <BaseCard 
                className={`BG-292A32 ${styles.card}`}
            >
                <form className={styles.form} onSubmit={handleSubmit}>
                    <Input 
                        name={"email"} 
                        label={""} 
                        placeholder={"Email"} 
                        value={formData.email} 
                        onChange={handleInputChange}
                        className={styles.input}
                    />
                    <SubmitButton label={"Subscribe to news"} className={styles.btn} onClick={() => handleSubmit} isLoading={isLoading}/>
                </form>
            </BaseCard>
        </div>
    )
}
