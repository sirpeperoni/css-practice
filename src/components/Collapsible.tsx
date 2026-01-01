import { useState } from "react";
import { Card } from "./Card";

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
            className=""
            onClick={handleClick}
        >
            <Card 
                backgroundColor={isOpen ? "bg-B9FF66" : "bg-F3F3F3"}              
            >
                <div className="collapsible">
                    <div className="collapsible-header">
                        <div className="collapsible-header-text">
                            <span>0{index}</span>
                            {headerText}
                        </div>
                        <span className="collapsible-icon">+</span>
                    </div>
                    <div className={`collapsible-body ${isOpen ? "open" : ""}`}>
                        <div className="divider"></div>
                        <div className="collapsible-content">
                            <p>{textContent}</p>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}