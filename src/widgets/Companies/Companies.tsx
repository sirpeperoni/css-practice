import amazon from "../../assets/company/amazon.png"
import dribbble from "../../assets/company/dribbble.png"
import hubspot from "../../assets/company/hubspot.png"
import notion from "../../assets/company/notion.png"
import netflix from "../../assets/company/netflix.png"
import zoom from "../../assets/company/zoom.png"
import styles from "./companies.module.css"

const companiesImages = [
    amazon,
    dribbble,
    hubspot,
    notion,
    netflix,
    zoom
]


export const Companies = () => {
    return (
        <div className={styles.companies}>
            {
                companiesImages.map(el => <img src={el} alt="" className={styles.image_container}/>)
            }
        </div>
    )
}