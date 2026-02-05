import type { ReactNode } from "react";
import styles from './card.module.css'

interface BaseCardProps {
    children: ReactNode;
    className?: string;
}

export const BaseCard = ({ children, className }: BaseCardProps) => (
    <div className={`${styles.card} ${className ?? ''}`}>
        {children}
    </div>
)

export const CardWithShadow = ({ children, className }: BaseCardProps) => (
    <BaseCard className={`${styles.cardShd} ${className}`}>
        {children}
    </BaseCard>
)

