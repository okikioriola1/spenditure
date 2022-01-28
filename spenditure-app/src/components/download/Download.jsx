import React from 'react'
import appleLogo from '../../images/apple.png'
import playStore from '../../images/play-store.png'

import './download.css'

const Download = () => {
    return (
        <div className="spenditure__download section__padding">
            <div className="spenditure__download-container">
                <div className="spenditure__download-content-header">
                    <h1>Download the free app</h1>
                </div>
                <div className="spenditure__download-content-p">
                    <p>Spend less and secure the future with spenditure</p>
                </div>
                <div className="spenditure__download-content-btn">
                <div className="app-store">
                            <img src={appleLogo} alt="applelogo" className="download-img"/>
                            <span className="download-apple">Download on <span className="bold"> App store</span></span>
                        </div>
                        <div className="google-pay">
                        <img src={playStore} alt="playStore logo" className="download-img"/>
                            <span className="download-google">Download on <span className="bold">Google play</span></span>

                        </div>
                </div>
            </div>
            
        </div>
    )
}

export default Download
