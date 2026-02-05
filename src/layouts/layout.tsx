import { Footer } from "../widgets/Footer/Footer";
import { Header } from "../widgets/Header/Header";
import { Home } from "../pages/Home";

export const Layout = () => {
    return (
        <>
            <Header/>
            <div className="container">
                <div className="main">
                    <Home/>
                </div>
                <Footer/>
            </div>

        </>
    );
}