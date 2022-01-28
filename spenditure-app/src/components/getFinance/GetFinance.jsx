import React from 'react'
import './getFinance.css'
import financeImg from '../../images/finance-img.png'
import Fade from 'react-reveal'
const GetFinance = () => {
    return (
        <div className="spenditure__getfinance section__padding">
            <Fade left cascade={true}>
            <div className="spenditure__getfinance-img">
                <img src={financeImg} className="getfinance-image" alt="get-finance"/>
            </div>
            </Fade>
            <Fade right cascade={true}>
            <div className="spenditure__getfinance-content">
                <h1>Get All Your Finances In one App</h1>
                <p>See how you spend by connecting your finances,expense and income.</p>
                <button type="button" className="get-started-btn">Get Started</button>

            </div>
            </Fade>
            
        </div>
    )
}

export default GetFinance
