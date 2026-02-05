import styles from "./text-area.module.css"


type Props = {
  placeholder: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  cols?: number;
  required?: boolean;
  className?: string;
}

export const TextArea = ({
    placeholder,
    onChange,
    rows = 5,
    cols = 80,
    required = false,
    className = "",
    name=""
}: Props) => {
  return (
    <div className={styles.textarea}>
        <textarea
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            rows={rows}
            cols={cols}
            className={`${styles.textarea_field} ${className}`}
            required={required}
        />
    </div>
  );
};
