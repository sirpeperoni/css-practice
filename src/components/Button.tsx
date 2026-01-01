import { useState } from "react"

type Props = {
    normalBackgroundColor: string
    children: string
    normalTextColor: string,
    hoverBackgroundColor: string,
    hoverTextColor: string
}

export const Button = ({normalBackgroundColor, children, normalTextColor, hoverBackgroundColor, hoverTextColor}: Props) => {
    const [isHovered, setIsHovered] = useState(false);
    return <>
        <button 
            style={{
                background: isHovered ? hoverBackgroundColor : normalBackgroundColor,
                color: isHovered ? hoverTextColor : normalTextColor
            }} 
            className={`btn`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
        </button>
    </>
}

