import type { ReactNode } from "react";

type Props = {
    backgroundColor: string,
    paddingHorizontal?: number;
    paddingVertical?: number;
    marginHorizontal?: number;
    marginVertical?: number;
    marginTop?: number;
    shadow?: boolean;
    borderRadius?: string;
    children: ReactNode
}

export const Card = ({
    children, 
    backgroundColor,
    paddingHorizontal = 0, 
    paddingVertical = 0, 
    marginVertical = 0, 
    marginHorizontal = 0, 
    marginTop = 0,
    borderRadius = "45px",
    shadow = false}: Props) => 
{
    const pd = `${paddingVertical}px ${paddingHorizontal}px `
    const mg = `${marginVertical}px ${marginHorizontal}px `
    const mgt = `${marginTop}px`
    return (
        <div
            style={{padding: pd, margin: mg, marginTop:mgt, borderRadius: borderRadius}}
            className={`card ${shadow ? "card-shd" : ""} ${backgroundColor}`}
        >
            {children}
        </div>
    )
}

interface BaseCardProps {
    children: ReactNode;
    className?: string;
}

export const BaseCard = ({ children, className }: BaseCardProps) => (
    <div className={`card ${className ?? ''}`}>
        {children}
    </div>
)

export const CardWithShadow = ({ children }: BaseCardProps) => (
    <BaseCard className={'card-shadow'}>
        {children}
    </BaseCard>
)

