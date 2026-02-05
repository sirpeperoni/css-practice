import arrowImageGreen from "../../assets/arrows/Arrow-green.png"
import arrowImageBlack from "../../assets/arrows/Arrow-black.png"
import imgageCard1 from "../../assets/cards/tokyo-magnifier-web-search-with-elements 2.png"
import imgageCard2 from "../../assets/cards/Illustration (1).png"
import imgageCard3 from "../../assets/cards/Illustration (2).png"
import imgageCard4 from "../../assets/cards/tokyo-sending-messages-from-one-place-to-another 1.png"
import imgageCard5 from "../../assets/cards/Illustration (3).png"
import imgageCard6 from "../../assets/cards/Illustration (4).png"
import { Grid } from "../../components/Grid/Grid"
import { CardWithShadow } from "../../components/Card/Card"
import styles from "./services.module.css"

interface CardServicesData {
    topText: string;
    bottomText: string;
    backgroundColor: string;
    textBackgroundColor: string;
    arrowBackgroundColor: string;
    arrowImglink: string;
    linkTextColor: string;
    imgageCard: string;
}

const cardsServices: CardServicesData[] = [
    {
        topText: "Search engine",
        bottomText: "optimization",
        backgroundColor: "bg-F3F3F3",
        textBackgroundColor: "bg-B9FF66",
        arrowBackgroundColor: "bg-191A23",
        arrowImglink: arrowImageGreen,
        linkTextColor: "",
        imgageCard: imgageCard1
    },
    {
        topText: "Pay-per-click",
        bottomText: "advertising",
        backgroundColor: "bg-B9FF66",
        textBackgroundColor: "BG-FFFFFF",
        arrowBackgroundColor: "bg-191A23",
        arrowImglink: arrowImageGreen,
        linkTextColor: "",
        imgageCard: imgageCard2
    },
    {
        topText: "Social Media",
        bottomText: "Marketing",
        backgroundColor: "bg-191A23",
        textBackgroundColor: "BG-FFFFFF",
        arrowBackgroundColor: "BG-FFFFFF",
        arrowImglink: arrowImageBlack,
        linkTextColor: "color-FFFFFF",
        imgageCard: imgageCard3
    },
    {
        topText: "Email",
        bottomText: "Marketing",
        backgroundColor: "bg-F3F3F3",
        textBackgroundColor: "bg-B9FF66",
        arrowBackgroundColor: "bg-191A23",
        arrowImglink: arrowImageGreen,
        linkTextColor: "",
        imgageCard: imgageCard4
    },
    {
        topText: "Content",
        bottomText: "Creation",
        backgroundColor: "bg-B9FF66",
        textBackgroundColor: "BG-FFFFFF",
        arrowBackgroundColor: "bg-191A23",
        arrowImglink: arrowImageGreen,
        linkTextColor: "",
        imgageCard: imgageCard5
    },
    {
        topText: "Analytics and",
        bottomText: "Tracking",
        backgroundColor: "bg-191A23",
        textBackgroundColor: "bg-B9FF66",
        arrowBackgroundColor: "BG-FFFFFF",
        arrowImglink: arrowImageBlack,
        linkTextColor: "color-FFFFFF",
        imgageCard: imgageCard6
    },
]


export const Services = () => {
    return <Grid col={2} gap={40}>
        {
            cardsServices.map((item, index) => (
                <CardWithShadow key={index} className={`p-50px ${item.backgroundColor}`}>
                    <div className={styles.card_info}>
                        <div className={styles.card_info_column}>
                            <div className={`${styles.card_info_text} ${item.textBackgroundColor}`}>{item.topText}</div>
                            <div className={`${styles.card_info_text} ${item.textBackgroundColor}`}>{item.bottomText}</div>
                        </div>
                        <div className={styles.card_info_link}>
                            <a href=''>
                            <div className={`${styles.arrow_container} ${item.arrowBackgroundColor}`}>
                                <img src={item.arrowImglink} alt='' />
                            </div>

                            <span className={`${item.linkTextColor}`}>Learn more</span>
                            </a>
                        </div>
                    </div>
                    <img src={item.imgageCard} alt=""/>
                </CardWithShadow>
            ))
        }
    </Grid>
}