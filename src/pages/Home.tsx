
import { CardInfoServices } from "../components/CardInfoServices";
import { Grid } from "../components/Grid";
import arrowImageGreen from "../assets/arrows/Arrow-green.png"
import arrowImageBlack from "../assets/arrows/Arrow-black.png"
import imgageCard1 from "../assets/cards/tokyo-magnifier-web-search-with-elements 2.png"
import imgageCard2 from "../assets/cards/Illustration (1).png"
import imgageCard3 from "../assets/cards/Illustration (2).png"
import imgageCard4 from "../assets/cards/tokyo-sending-messages-from-one-place-to-another 1.png"
import imgageCard5 from "../assets/cards/Illustration (3).png"
import imgageCard6 from "../assets/cards/Illustration (4).png"
import imageProposal from "../assets/free-proposal/Illustration (5).png"
import { HeaderSection } from "../components/HeaderSection";
import { CollapsibleList } from "../components/CollapsibleList";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Cases } from "../components/Cases";
import { TeamList } from "../components/TeamList";
import { Slider } from "../components/Slider";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { Landing } from "../components/Landing";
import { Companies } from "../components/Companies";

const cardsServices = [
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





export const Home = () => {
    return (
        <>
            <section>
                <Landing/>
                <Companies/>
            </section>
            <section>
                <HeaderSection 
                    headerText={"Services"} 
                    infoText={"At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"} 
                    widthInfoText={580}
                />
                <Grid col={2} gap={40}>
                    {
                        cardsServices.map((item, index) => (
                            <Card key={index} backgroundColor={item.backgroundColor} paddingHorizontal={50} paddingVertical={50} shadow={true}>
                                <CardInfoServices 
                                    textBackgroundColor={item.textBackgroundColor} 
                                    arrowBackgroundColor={item.arrowBackgroundColor} 
                                    arrowImglink={item.arrowImglink} 
                                    topText={item.topText} 
                                    bottomText={item.bottomText}
                                    linkTextColor={item.linkTextColor}
                                />
                                <img src={item.imgageCard} alt=""/>
                            </Card>
                        ))
                    }
                </Grid>
                <Card backgroundColor={"bg-F3F3F3"} paddingHorizontal={60} marginTop={100}>
                    <div className="content-container">
                        <div className="content-info">
                            <h1>Let’s make things happen</h1>
                            <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                            <div className="reset-width">
                                <Button
                                    normalBackgroundColor={"#191A23"} 
                                    normalTextColor={"white"} 
                                    hoverBackgroundColor="white" 
                                    hoverTextColor="#191A23"
                                >
                                    Get your free proposal
                                </Button>
                            </div>
                        </div>
                        <img src={imageProposal} alt="" className=""/>
                    </div>

                </Card>
            </section>
            <section>
                <HeaderSection 
                    headerText={"Case Studies"} 
                    infoText={"Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"} 
                    widthInfoText={580}
                />
                <Card
                    backgroundColor="bg-191A23"
                    paddingHorizontal={60}
                    paddingVertical={70}
                >
                    <Cases/>
                </Card>
            </section>
            <section>
                <HeaderSection 
                    headerText={"Our Working Process"} 
                    infoText={"Step-by-Step Guide to Achieving Your Business Goals"} 
                    widthInfoText={292}
                />
                <CollapsibleList/>
            </section>
            <section>
                <HeaderSection 
                    headerText={"Team"} 
                    infoText={"Meet the skilled and experienced team behind our successful digital marketing strategies"} 
                    widthInfoText={473}
                />
                <TeamList/>
            </section>
            <section>
                <HeaderSection 
                    headerText={"Testimonials"} 
                    infoText={"Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"} 
                    widthInfoText={473}
                />
                <Slider/>
            </section>
            <section>
                <HeaderSection 
                    headerText={"Contact Us"} 
                    infoText={"Connect with Us: Let's Discuss Your Digital Marketing Needs"} 
                    widthInfoText={323}
                />
                <ContactForm/>
            </section>
            <Footer/>


        </>
    );
};