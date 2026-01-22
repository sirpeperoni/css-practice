import { useState } from "react"

type Props = {
    normalBackgroundColor: string
    children: string
    type?: 'button' | 'submit' | 'reset';
    normalTextColor: string,
    hoverBackgroundColor: string,
    hoverTextColor: string,
    additionalClasses?: string
}

export const Button = ({normalBackgroundColor, children, normalTextColor, hoverBackgroundColor, hoverTextColor, type = 'submit', additionalClasses=""}: Props) => {
    const [isHovered, setIsHovered] = useState(false);
    return <>
        <button 
            style={{
                background: isHovered ? hoverBackgroundColor : normalBackgroundColor,
                color: isHovered ? hoverTextColor : normalTextColor
            }} 
            type={type}
            className={`btn ${additionalClasses}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
        </button>
    </>
}

