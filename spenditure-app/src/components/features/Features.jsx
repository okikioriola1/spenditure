
import React from 'react'
import {featureCard1, featureCard2, featureCard3 } from './data' 
import Feature from './Feature'
import  './features.css'

const Features = () => {
    return (
        <div className="spenditure__features section__padding">
            <Feature {...featureCard1}/>
            <Feature {...featureCard2}/>
            <Feature {...featureCard3}/>
            
        </div>
    )
}

export default Features
