type Props = {
    name: string;
    label: string;
    type?: 'text' | 'email' | 'password' | 'tel';
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    labelRequired?: boolean;
    additionalClassInput?: string;
    additionalInputContainerClass?: string;
    className?: string;
}


export const Input = ({
        name,
        label,
        type = 'text',
        placeholder,
        value,
        onChange,
        required = false,
        labelRequired = true,
        additionalClassInput = "",
        additionalInputContainerClass = "", className = "",
    }: Props) => {
    return (
        <div className={`text-input ${additionalInputContainerClass} ${className}`}>
            {
                labelRequired && <label htmlFor={name} className={`text-input-label`}>
                    {label} {required && <span className="required">*</span>}
                </label>
            }
            <input
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`text-input-field ${additionalClassInput}`}
                required={required}

            />
        </div>
    )
}
