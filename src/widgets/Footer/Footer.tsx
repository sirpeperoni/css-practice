import { FooterForm } from "./FooterForm"
import logo from "../../assets/Logo (1).png"
import inLogo from "../../assets/social media/in.png"
import facebook from "../../assets/social media/facebook.png"
import x from "../../assets/social media/x.png"
import { navData } from "../../nav"
import styles from './footer.module.css'

const socialNetworks = [
    inLogo,
    facebook,
    x
]

export const Footer = () => {
    return (
        <footer className={`${styles.footer} bg-191A23`}>
            <div className={styles.footer_header}>
                <div className={styles.footer_logo}>
                    <img src={logo} alt=""/>
                </div>
                <div className={styles.footer_header_nav}>
                {
                    navData.map((navEl) => 
                        <a href={navEl.link}>
                            <span>{navEl.text}</span>
                        </a>
                    )
                }
                </div>
                <div className={styles.footer_header_socialmedia}>
                    {
                        socialNetworks.map((el) => <img src={el} alt=""/>)
                    }
                </div>
            </div>
            <div className={styles.footer_info}>
                <div className={styles.footer_info_contact}>
                    <span>Contact us:</span>
                    <p>Email: info@positivus.com</p>
                    <p>Phone: 555-567-8901</p>
                    <div>
                        <p>Address: 1234 Main St</p>
                        <p> Moonstone City, Stardust State 12345</p>
                    </div>
                </div>
                <FooterForm/>
            </div>
            <div className={`divider ${styles.m_50}`}></div>
            <div className={styles.credits}>
                <span>© {new Date().getFullYear()} Positivus. All Rights Reserved.</span>
                <span><a href="">Privacy Policy</a></span>
            </div>
        </footer>
    )
}
