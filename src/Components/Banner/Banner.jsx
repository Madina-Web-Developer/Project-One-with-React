import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
    <section className='mina_banner'>
        <div className="container">
            <div className="mina_main_row">
                <div className="md_text">
                    <h1>Want anything to be easy with <span>LaslesVPN.</span></h1>
                    <p>Provide a network for all your needs with ease and fun using <span>LaslesVPN</span> discover interesting features from us.</p>
                    <Link className='button' to={''} >Get Started</Link>
                </div>
                <div className="md_img">
                    <img src="Images/b.png" alt="banner_img" />
                </div>
            </div>
        </div>

    </section>
    </>
  )
}

export default Banner