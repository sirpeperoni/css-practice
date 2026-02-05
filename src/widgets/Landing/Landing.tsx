import { Button } from "../../components/Button/Button"
import image from "../../assets/Illustration.png"
import styles from "./landing.module.css"


export const Landing = () => {
    return (
        <section className={styles.landing}>
            <div className={styles.landingInfo}>
                <div className={styles.landingInfoHeader}>
                    <h1>
                        Navigating the digital landscape for success
                    </h1>
                </div>
                <div className={styles.landingInfoMain}>
                    <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                </div>
                <Button 
                    additionalClasses={styles.btn}
                >
                    Book a consultation
                </Button>
            </div>
            <img src={image} alt=""/>
        </section>
    )
}