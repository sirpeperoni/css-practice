


type Props = {
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  cols?: number;
  required?: boolean;
}

export const TextArea = ({
    name,
    label,
    placeholder,
    value,
    onChange,
    rows = 5,
    cols = 80,
    required = false
}: Props) => {
  return (
    <div className="textarea">
        <label htmlFor={name} className="textarea-label">
            {label} {required && <span className="required">*</span>}
        </label>
        <textarea
            id={name}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            rows={rows}
            cols={cols}
            className={`textarea-field`}
            required={required}
        />

    </div>
  );
};
