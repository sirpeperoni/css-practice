import arrow from '../../assets/arrows/Arrow-green.png';
import { BaseCard } from '../../components/Card/Card';
import styles from "./case.module.css"

interface CaseItemData {
  text: string;
  link: string;
}

interface CaseItemProps {
  data: CaseItemData;
}

const CaseItem = ({ data }: CaseItemProps) => (
  <div className={styles.case_info_column}>
    <p className='color-FFFFFF'>{data.text}</p>
    <a className={styles.link} href={data.link}>
      <span className='color-B9FF66'>Learn more</span>
      <img src={arrow} alt='' />
    </a>
  </div>
);

const data: CaseItemData[] = [
  {
    text: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
    link: '',
  },
  {
    text: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
    link: '',
  },
  {
    text: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
    link: '',
  },
];

export const Cases = () => {
  return (
    <BaseCard className={`bg-191A23 ${styles.card}`}>
      <div className={styles.case_info}>
        {data.map((item, index) => (
          <CaseItem data={item} key={index} />
        ))}
      </div>
    </BaseCard>
  );
};
