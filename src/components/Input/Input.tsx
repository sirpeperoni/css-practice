import styles from "./input.module.css"

type Props = {
    name: string;
    label?: string;
    type?: 'text' | 'email' | 'password' | 'tel';
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    className?: string;
}


export const Input = ({
        name,
        type = 'text',
        placeholder,
        value,
        onChange,
        required = false,
        className = "",
    }: Props) => {
    return (
         <input
             type={type}
             name={name}
             placeholder={placeholder}
             value={value}
             onChange={onChange}
             className={`${styles.input} ${styles.input_field} ${className}`}
             required={required}
         />
    )
}
