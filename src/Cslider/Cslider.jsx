import React from 'react'
import './Cslider.css'
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoArrowBackCircleOutline } from "react-icons/io5";


const Cslider = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 600,
        nextArrow: <IoArrowForwardCircleOutline/>,
        prevArrow: <IoArrowBackCircleOutline />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        
        
      };

  return (
   <div className="container">


<div className="slider-container mySlider">
      <Slider {...settings}>

        <div className='happy_main_card'>


            <div>

         <div className="h_sc">
                    <div className="head">
                        <div className="h_img">
                            <img src="Images/hp3.png" alt="p" />
                            <div className="h_p">
                                <h1>Viezh Robert</h1>
                                <p>Warsaw, Poland</p>
                            </div>
                        </div>

                        <div className="h_icon">
                            <h2>4.5</h2>
                            <FaStar className='h_star' />
                        </div>

                    </div>
                    <div className="h_para">
                        <p>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
                    </div>
               </div>
         </div>

            </div>


         <div>

         <div className="h_sc">
                    <div className="head">
                        <div className="h_img">
                            <img src="Images/hp2.png" alt="p" />
                            <div className="h_p">
                                <h1>Yessica Christy</h1>
                                <p>Shanxi, China</p>
                            </div>
                        </div>

                        <div className="h_icon">
                            <h2>4.5</h2>
                            <FaStar className='h_star' />
                        </div>

                    </div>
                    <div className="h_para">
                        <p>“I like it because I like to travel far and still can connect with high speed.”.</p>
                    </div>
               </div>
        
         </div>

         <div>  
         <div className="h_sc">
                    <div className="head">
                        <div className="h_img">
                            <img src="Images/hp1.png" alt="p" />
                            <div className="h_p">
                                <h1>Kim Young Jou</h1>
                                <p>Seoul, South Korea</p>
                            </div>
                        </div>

                        <div className="h_icon">
                            <h2>4.5</h2>
                            <FaStar className='h_star' />
                        </div>

                    </div>
                    <div className="h_para">
                        <p>“This is very unusual for my business that currently requires a virtual private network that has high security.”.</p>
                    </div>
               </div>
        </div>
       
       
      </Slider>
    </div>
    




   </div>
  )
}

export default Cslider