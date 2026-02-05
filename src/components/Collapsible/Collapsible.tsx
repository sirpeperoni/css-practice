import { useState } from "react";
import { CardWithShadow } from "../Card/Card";
import styles from "./collapsible.module.css"

type Props = {
    index: number
    headerText: string,
    textContent: string,
}

export const Collapsible = ({headerText, textContent, index}:Props) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div 
            onClick={handleClick}
        >
            <CardWithShadow 
                className={isOpen ? "bg-B9FF66" : "bg-F3F3F3"}          
            >
                <div className={styles.collapsible}>
                    <div className={styles.collapsibleHeader}>
                        <div className={styles.collapsibleHeaderText}>
                            <span>{index <= 9 ? `0${index}` : index}</span>
                            {headerText}
                        </div>
                        <span className={styles.collapsibleIcon}>{isOpen ? "-" : "+"}</span>
                    </div>
                    <div className={`${styles.collapsibleBody} ${isOpen ? `${styles.open}` : ""}`}>
                        <div className="divider"></div>
                        <div className={styles.collapsibleContent}>
                            <p>{textContent}</p>
                        </div>
                    </div>
                </div>
            </CardWithShadow>
        </div>
    );
}
