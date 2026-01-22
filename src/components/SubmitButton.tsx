type Props = {
    label: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    isLoading?: boolean;
}


export const SubmitButton = ({
    label,
    onClick,
    type = 'submit',
    disabled = false,
    isLoading = false
}: Props) => {
    return (
      <button
        type={type}
        className="submit-button"
        onClick={onClick}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
      >
        {isLoading ? (
          <span className="spinner"></span>
        ) : (
          <span className="submit-button-text">{label}</span>
        )}
      </button>
    );
};