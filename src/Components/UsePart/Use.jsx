import React from 'react'
import './Use.css'
import { IoIosCheckmarkCircle } from "react-icons/io";

const Use = () => {
  return (
    <section className='user_mina'>
        <div className="container">

            <div className="mina_main">

                <div className="mina_img">
                    <img src="Images/use.png" alt="use" />
                </div>

                <div className="mina_text">
                  
                    <h1>We Provide Many Features You Can Use</h1>
                    <p className='madina_text'>You can explore the features that we provide with fun and have
                    their own functions each feature.</p>

                    <div className="main_mina_icon">
                       <div className="use_icon">
                       <IoIosCheckmarkCircle className='c' />    
                     <p>Powerfull online protection.</p>
                       </div>
                          <div className="use_icon">
                          <IoIosCheckmarkCircle className='c' />    
                     <p>Internet without borders.</p>
                       </div>
                       <div className="use_icon">
                       <IoIosCheckmarkCircle className='c' />    
                     <p>Supercharged VPN</p>
                       </div>
                       <div className="use_icon">
                       <IoIosCheckmarkCircle className='c' />    
                     <p>No specific time limits.</p>
                       </div>
                    </div>


                </div>
            </div>
        </div>
    </section>
  )
}

export default Use