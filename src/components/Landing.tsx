import { Button } from "./Button"
import image from "../assets/Illustration.png"

export const Landing = () => {
    return (
        <section className="landing">
            <div className="landing-info">
                <div className="landing-info-header">
                    <h1>
                        Navigating the digital landscape for success
                    </h1>
                </div>
                <div className="landing-info-main-info">
                    <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                </div>
                <Button 
                    normalBackgroundColor={"#191A23"} 
                    normalTextColor={"#FFF"} 
                    hoverBackgroundColor={"#B9FF66"} 
                    hoverTextColor={"#191A23"}
                    additionalClasses="landing-btn"
                >
                    Book a consultation
                </Button>
            </div>
            <img src={image} alt=""/>
        </section>
    )
}