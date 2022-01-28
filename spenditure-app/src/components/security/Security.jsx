import React from 'react'
import './security.css'
import Shield from '../../images/shield.png'
import Fade from 'react-reveal'
const Security = () => {
    return (
        <div className="spenditure__security section__padding">
            <Fade left cascade={true}>
            <div className="spenditure__security-image">
                <img src={Shield} className="shield-img" alt="shield"/>
            </div>
            </Fade>
            <Fade right cascade={true}>
            <div className="spenditure__security-content">
                <h1>Your security is our priority</h1>
                <p>Spenditure uses the highest level of Internet Security and it is secured by 256 bits SSL security encryption to ensure that your information is completely protected from fraud.<a href="/">Learn More</a></p>
            </div>
            </Fade>
            
        </div>
    )
}

export default Security
