import React from 'react'
import FiveStars from '../../images/five-stars.png'
const Testimonial = ({paragraph, profileName, profileImg}) => {
    return (
        <div className="spenditure__testimonial-card">
            <div className="spenditure__testimonial-card-content">
                <div className="stars">
                    <img src={FiveStars} alt='five-stars'/>
                </div>
                <div className="spenditure__testimonial-card-content-p">
                    <p>{paragraph}</p>
                </div>
                <div className="spenditure__testimonial-card-profile">
                    <img className="profile-img" src={profileImg} alt="profile"/>
                    <p>{profileName}</p>
                </div>
            </div>

            
        </div>
    )
}

export default Testimonial
