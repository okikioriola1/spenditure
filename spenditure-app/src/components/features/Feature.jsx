import React from 'react'


const Feature = ({CardImg, header, text}) => {
    return (
        <div className="spenditure__feature">
            <div className="spenditure__feature-card">
                <div className="spenditure__feature-img-container">
                    <img src={CardImg} className="card-img" alt="feature-card"/>
                </div>
                <div className="spenditure__feature-content">
                    <h1>{header}</h1>
                        <p>{text}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Feature
