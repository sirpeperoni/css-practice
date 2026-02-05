import styles from './btn.module.css'

type Props = {
    children: string
    type?: 'button' | 'submit' | 'reset';
    additionalClasses?: string
}

export const Button = ({children, type = 'submit', additionalClasses=""}: Props) => {
    return <>
        <button 
            type={type}
            className={`${styles.btn} ${additionalClasses}`}
            onClick={() => {
                console.log(styles)
            }}
        >
            {children}
        </button>
    </>
}

