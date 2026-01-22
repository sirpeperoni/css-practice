import { Card } from "./Card"
import { FooterForm } from "./FooterForm"
import logo from "../assets/Logo (1).png"
import inLogo from "../assets/social media/in.png"
import facebook from "../assets/social media/facebook.png"
import x from "../assets/social media/x.png"

export const Footer = () => {
    return (
        <>
            <Card 
                backgroundColor={"bg-191A23"}
                paddingVertical={55} 
                borderRadius="45px 45px 0px 0px"
                marginTop={140}
                paddingHorizontal={60}
            >
                <footer className="footer">
                    <div className="footer-header">
                        <div className="footer-logo">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="footer-header-nav">
                            <a href="">
                                <span>About us</span>
                            </a>
                            <a href="">
                                <span>Services</span>
                            </a>
                            <a href="">
                                <span>Use Cases</span>
                            </a>
                            <a href="">
                                <span>Pricing</span>
                            </a>
                            <a href="">
                                <span>Blog</span>
                            </a>
                        </div>
                        <div className="footer-header-socialmedia">
                            <img src={inLogo} alt=""/>
                            <img src={facebook} alt=""/>
                            <img src={x} alt=""/>
                        </div>
                    </div>
                    <div className="footer-info">
                        <div className="footer-info-contact">
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
                    <div className="divider m-50"></div>
                    <div className="credits">
                        <span>© 2023 Positivus. All Rights Reserved.</span>
                        <span><a href="">Privacy Policy</a></span>
                    </div>
                </footer>
            </Card>
        </>
    )
}