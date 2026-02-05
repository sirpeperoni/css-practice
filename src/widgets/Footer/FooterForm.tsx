import { useRef, useState } from "react";
import { Button } from "../../components/Button/Button"
import { BaseCard } from "../../components/Card/Card"
import { Input } from "../../components/Input/Input";
import styles from './footer.module.css'
import { SubmitButton } from "../../components/SubmitButton/SubmitButton";
import { delay } from "../../utils/delay";

export const FooterForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true)
        if (formRef.current) {
            const formData = new FormData(formRef.current);
            const email = formData.get('email') as string;
            console.log({ email });
        }
        await delay(1000);
        setIsLoading(false);
    };


    return (
        <div className={styles.form_container} >
            <BaseCard 
                className={`BG-292A32 ${styles.card}`}
            >
                <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
                    <Input 
                        name={"email"} 
                        label={""} 
                        placeholder={"Email"} 
                        className={styles.input}
                        required
                    />
                    <SubmitButton label={"Subscribe to news"} className={styles.btn} onClick={() => handleSubmit} isLoading={isLoading}/>
                </form>
            </BaseCard>
        </div>
    )
}
