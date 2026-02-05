import styles from "./header-section.module.css"

type Props = {
  headerText: string;
  infoText: string;
  widthInfoText: number;
};

export const HeaderSection = ({ headerText, infoText, widthInfoText }: Props) => {
  const width = `${widthInfoText}px`;
  return (
    <div className={styles.headerSection}>
      <span>{headerText}</span>
      <p style={{ width: width }}>{infoText}</p>
    </div>
  );
};
