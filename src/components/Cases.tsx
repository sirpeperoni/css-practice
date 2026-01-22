import arrow from "../assets/arrows/Arrow-green.png"

export const Cases = () => {
    return (
        <>
            <div className="case-info">
                <div className="case-info-column r-border">
                    <p className="color-FFFFFF">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                    <a className="case-link" href="">
                        <span className="color-B9FF66">Learn more</span>
                        <img src={arrow} alt=""/>
                    </a>
                </div>
                <div className="case-info-column middle">
                    <p className="color-FFFFFF">For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
                    <a className="case-link" href="">
                        <span className="color-B9FF66">Learn more</span>
                        <img src={arrow} alt=""/>
                    </a>
                </div>
                <div className="case-info-column l-border">
                    <p className="color-FFFFFF">For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
                    <a className="case-link" href="">
                        <span className="color-B9FF66">Learn more</span>
                        <img src={arrow} alt=""/>
                    </a>
                </div>
            </div>
        </>
    )
}