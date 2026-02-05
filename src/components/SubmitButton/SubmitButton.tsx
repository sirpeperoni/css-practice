import styles from "./SubmitBtn.module.css"

type Props = {
    label: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    isLoading?: boolean;
    className?: string; 
}


export const SubmitButton = ({
    label,
    onClick,
    type = 'submit',
    disabled = false,
    isLoading = false,
    className = ''
}: Props) => {
    return (
      <button
        type={type}
        className={`${className} ${styles.btn}`}
        onClick={onClick}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
      >
        {isLoading ? (
          <span className={styles.spinner}></span>
        ) : (
          <span>{label}</span>
        )}
      </button>
    );
};