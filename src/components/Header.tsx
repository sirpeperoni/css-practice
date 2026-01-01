import { Button } from "./Button"
import logo from '../assets/Logo.svg'


export const Header = () => {
    return (
        <div className="header">
            <a href="">
                <img src={logo} alt="" />
            </a>
            <div className="header-nav">
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
            <Button 
                normalBackgroundColor={"white"} 
                normalTextColor={""} 
                hoverBackgroundColor="#191A23" 
                hoverTextColor="white"
            >
                Request a quote
            </Button>
        </div>
    )
}