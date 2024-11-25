import React, { useState } from 'react'
import './Mobile.css'
import { Link } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";

const Mobile = () => {

    // ======= Custom UseState ======== //

    const [show  , setshow] = useState(false)



  return (
    <>
    <nav className='mobile'>
        <div className="container">

            <div className="m_row">
               <Link to={"/"} className="m_logo">
                    <img src="Images/Logo.png" alt="logo" />
                </Link>

                <div onClick={()=> setshow(!show)} className="m_i">

                  <FaBarsStaggered className='m_icon'/>
                      
                </div>

            </div>

            {
                show ?

                <ul className='m_res'>
                  <li><Link to={'#'} >About</Link></li>
                  <li><Link to={'#'} >Features</Link></li>
                  <li><Link to={'#'} >Pricing</Link></li>
                  <li><Link to={'#'} >Testimonials</Link></li>
                  <li><Link to={'#'} >Help</Link></li>
               </ul>

               :
               ''


                
            }
        </div>

    </nav>
    
    
    
    </>
  )
}

export default Mobile