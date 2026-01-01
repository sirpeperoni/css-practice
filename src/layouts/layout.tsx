import { Header } from "../components/Header";
import { Home } from "../pages/Home";

export const Layout = () => {
    return (
        <>
            <Header/>
            <div className="container">
                <div className="main">
                    <Home/>
                </div>
            </div>
        </>
    );
}