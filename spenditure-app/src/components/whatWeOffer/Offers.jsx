import React from 'react'
import Fade from 'react-reveal'


const Offers = ({image, header, paragraph, link, rowReverse}) => {
    return (
        <div>
            <div className={`${rowReverse ? "row" : "reverse"} spenditure__whatweoffer-container`}>
                <Fade right cascade={true}>
            <div className="spenditure__whatweoffer-image">
                <img src={image} className="what-we-offer-img" alt="what-we-offer"/>
            </div>
            </Fade>
            <Fade left cascade={true}>
            <div className="spenditure__whatweoffer-content">
                <h1>{header}</h1>
                <p>{paragraph}</p>
                <a href='/'>{link}</a>

            </div>
            </Fade>
            </div>
        </div>
    )
}

export default Offers
