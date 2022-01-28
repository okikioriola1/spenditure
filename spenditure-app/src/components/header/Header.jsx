import React from 'react'
import peopleImg from '../../images/header-img.png'
import headerDots from '../../images/header-dots.png'
import appleLogo from '../../images/apple.png'
import playStore from '../../images/play-store.png'
import './header.css'
import Fade from 'react-reveal'

const Header = () => {
    return (
        <div className="spenditure__header section__padding">
            <div className="spenditure__header-content">
                <Fade left cascade={true}>
                <h1 className="spenditure__header-text">A simplified way to take charge and <span className="green-text">control of your finances</span></h1>
                <p>Create custom budgets, track financial 
                    expenditures and discover investment 
                    opportunities </p>
                    <div className="spenditure__header-content-button">
                        <button type="button">Sign up for Spenditure</button>
                    </div>
                    <div className="spenditure__header-download">
                        <div className="app-store">
                            <img src={appleLogo} alt="applelogo" className="download-img"/>
                            <span className="download-apple">Download on <span className="bold"> App store</span></span>
                        </div>
                        <div className="google-pay">
                        <img src={playStore} alt="playStore logo" className="download-img"/>
                            <span className="download-google">Download on <span className="bold">Google play</span></span>

                        </div>
                    </div>
                    </Fade>
            </div>
            <div className="spenditure__header-images">
                <Fade right cascade={true}>
            <div className="img-people">
                    <img src={peopleImg}  className="header-img" alt="header-people"/>
                </div>
                <div className="img-dots">
                    <img src={headerDots} className="header-img" alt="dots"/>
                </div>
                </Fade>

            </div>

            
        </div>
    )
}

export default Header
