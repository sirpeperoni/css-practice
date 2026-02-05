import type { ReactNode } from "react";
import styles from './grid.module.css'

type Props = {
    col?: number,
    gap?: number,
    children: ReactNode,
}


export const Grid = ({col, gap, children}:Props) => {
    return (
        <div
            className={`${styles.grid}`}
            style={{
                gridTemplateColumns: col ? `repeat(${col}, 1fr)` : undefined,
                gap,
            }}
        >
            {children}
        </div>
    );
}
