import type { ReactNode } from "react"

type Props = {
    backgroundColor: string,
    padding?: number;
    children: ReactNode
}

export const Card = ({children, backgroundColor,padding}: Props) => {
    const pd = `${padding}px`
    return (
        <div
            style={{padding: pd}}
            className={`card ${backgroundColor}`}
        >
            {children}
        </div>
    )
}