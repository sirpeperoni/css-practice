type Props = {
    id: string;
    label: string;
    checked: boolean;
    onClick: (id: string) => void;
}
  
export const ToggleSwitch = ({ id, label, checked, onClick }: Props ) => {
    return (
        <div 
            className={`toggle-switch ${checked ? 'active' : ''}`}
            onClick={() => onClick(id)}
        >
            <input 
                type="checkbox" 
                id={id}
                checked={checked}
            />
            <span>{label}</span>
        </div>
    );
};
