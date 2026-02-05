import { Button } from "../../components/Button/Button"
import { BaseCard } from "../../components/Card/Card"
import imageProposal from "../../assets/free-proposal/Illustration (5).png"
import styles from "./proposal.module.css"


export const Proposal = () => {
    return <BaseCard className={`bg-F3F3F3 ${styles.card}`}>
        <div className={styles.contentContainer}>
            <div className={styles.contentInfo}>
                <h1>Let’s make things happen</h1>
                <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                <div className={styles.resetWidth}>
                    <Button
                        additionalClasses={styles.btn}
                    >
                        Get your free proposal
                    </Button>
                </div>
            </div>
            <img src={imageProposal} alt="" className=""/>
        </div>
    </BaseCard>
}