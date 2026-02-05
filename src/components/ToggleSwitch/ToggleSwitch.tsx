import styles from "./toggle.module.css"

type Props = {
  id: string;
  label: string;
  checked: boolean;
  onClick: (id: string) => void;
};

export const ToggleSwitch = ({ id, label, checked, onClick }: Props) => {
  return (
    <div className={`${styles.toggle} ${checked ? styles.active : ''}`} onClick={() => onClick(id)}>
      <input type='radio' id={id} checked={checked} />
      <span>{label}</span>
    </div>
  );
};
