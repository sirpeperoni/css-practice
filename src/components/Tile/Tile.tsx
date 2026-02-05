import { CardWithShadow } from "../Card/Card"
import styles from './team.module.css';

type Props = {
    image: string,
    name: string,
    position: string,
    about: string
}


export const Tile = ({image, name, position, about}: Props) => {
    return <CardWithShadow className={`bg-FFFFFF ${styles.card}`}>
        <div>
            <div className={styles.team_card_header}>
                <div className={styles.team_flex}>
                    <img src={image} alt=""/>
                    <div>
                        <h2>{name}</h2>
                        <span>{position}</span>
                    </div>
                </div>
                <a href="">
                    <div className={styles.linkedin}>
                        <span className="color-B9FF66">in</span>
                    </div>
                </a>
            </div>
            <div className="divider"></div>
            <p>{about}</p>
        </div>
    </CardWithShadow>
}