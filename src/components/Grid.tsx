import type { ReactNode } from "react";

type Props = {
    col?: number,
    gap?: number,
    children: ReactNode,
}


export const Grid = ({col, gap, children}:Props) => {
    return (
        <div
            className={`grid`}
            style={{
                gridTemplateColumns: col ? `repeat(${col}, 1fr)` : undefined,
                gap,
            }}
        >
            {children}
        </div>
    );
}
