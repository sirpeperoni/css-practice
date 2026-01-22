import amazon from "../assets/company/amazon.png"
import dribbble from "../assets/company/dribbble.png"
import hubspot from "../assets/company/hubspot.png"
import notion from "../assets/company/notion.png"
import netflix from "../assets/company/netflix.png"
import zoom from "../assets/company/zoom.png"

export const Companies = () => {
    return (
        <div className="companies">
            <img src={amazon} alt="" className="image-container"/>
            <img src={dribbble} alt="" className="image-container"/>
            <img src={hubspot} alt="" className="image-container"/>
            <img src={notion} alt="" className="image-container"/>
            <img src={netflix} alt="" className="image-container"/>
            <img src={zoom} alt="" className="image-container"/>
        </div>
    )
}