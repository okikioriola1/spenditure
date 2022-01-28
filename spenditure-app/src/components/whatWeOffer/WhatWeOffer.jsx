import React from 'react'
import './whatWeOffer.css'
import{offer1, offer2, offer3} from './data'
import Offers from './Offers'
import Fade from 'react-reveal'

const WhatWeOffer = () => {
    return (
        
        <div className="spenditure__whatweoffer section__padding" id="what-we-offer">
            <Fade left cascade={true}>
            <div className="spenditure__whatweoffer-header">
                <h1> What We Offer</h1>
            </div>
            </Fade>
            <Offers {...offer1}/>
            <Offers {...offer2}/>
            <Offers {...offer3}/>
            

            
        </div>
        
    )
}

export default WhatWeOffer
