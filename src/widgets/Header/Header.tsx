import { Button } from "../../components/Button/Button"
import logo from '../../assets/Logo.svg'
import { navData } from "../../nav"
import styles from "./header.module.css"

export const Header = () => {
    return (
        <div className={styles.header}>
            <a href="">
                <img src={logo} alt="" />
            </a>
            <div className={styles.headerNav}>
                {
                    navData.map((navEl) => 
                        <a href={navEl.link}>
                            <span>{navEl.text}</span>
                        </a>
                    )
                }
            </div>
            <Button 
                additionalClasses={styles.btn}
            >
                Request a quote
            </Button>
        </div>
    )
}