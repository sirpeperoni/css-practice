import { HeaderSection } from "../components/HeaderSection/HeaderSection";
import { CollapsibleList } from "../widgets/CollapsibleList/CollapsibleList";
import { Cases } from "../widgets/Cases/Cases";
import { TeamList } from "../widgets/TeamList/TeamList";
import { Slider } from "../widgets/Slider/Slider";
import { ContactForm } from "../widgets/ContactForm/ContactForm";
import { Landing } from "../widgets/Landing/Landing";
import { Companies } from "../widgets/Companies/Companies";
import { Services } from "../widgets/Sevices/Services";
import { Proposal } from "../widgets/Proposal/Propasal";






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
                <Services/>
                <Proposal/>
            </section>
            <section>
                <HeaderSection 
                    headerText={"Case Studies"} 
                    infoText={"Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"} 
                    widthInfoText={580}
                />
                <Cases/>

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
        </>
    );
};
