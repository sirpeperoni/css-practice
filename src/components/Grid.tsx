import type { ReactNode } from "react";

type Props = {
    col: number,
    gap: number,
    children: ReactNode,
}


export const Grid = ({col, gap, children}:Props) => {
    const gapGrid = gap ? `${gap}px` : '0';
    return (
        <div
            className={`grid`}
            style={{
                gridTemplateColumns: `repeat(${col}, 1fr)`,
                gap: `${gapGrid}`,
            }}
        >
            {children}
        </div>
    );
}