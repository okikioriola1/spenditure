import React from 'react'
import './testimonials.css'
import {testimonialCard1, testimonialCard2, testimonialCard3, testimonialCard4} from'./data'
import Testimonial from './Testimonial'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonials = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1400 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1400, min: 0 },
        //   items: 2,
        //   slidesToSlide: 2 // optional, default to 1.
        // },
        // mobile: {
        //   breakpoint: { max: 500, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return (

        <div className="spenditure__testimonial section__padding">
            <div className="testimonial-header">
                <h1>Testimonials</h1>

            </div>
            
            
          <Carousel responsive={responsive} 
            swipeable={false}
             draggable={true}
             infinite={true}
             autoPlay={true}
             autoPlaySpeed={2000}
             arrows={false}
            
             
             keyBoardControl={true}>
              
            <Testimonial {...testimonialCard1}/>
            <Testimonial {...testimonialCard2}/>
            <Testimonial {...testimonialCard3}/>
            <Testimonial {...testimonialCard4}/>
            
            </Carousel>
        </div>
        
    )
}

export default Testimonials
