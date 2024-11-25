import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className='Footer'>

        <div className="container">
            <div className="madina_footer">

                <div className="part_1">

                   <img src="Images/Logo.png" alt="footer_logo" />
                   <p><span>LaslesVPN</span> is a private virtual network that has unique features and has high security.</p>
                   <div className="f_icons">
                    <img src="Images/f1.png" alt="fb" />
                    <img src="Images/f2.png" alt="fb" />
                    <img src="Images/f3.png" alt="fb" />
                   </div>
                   <h3>©2020LaslesVPN</h3>


                </div>

                <div className="part_2">

                    <div className="product">
                        <h2 className='f_p'>Product</h2>
                        <h2>Download </h2>
                        <h2>Pricing</h2>
                        <h2>Locations</h2>
                        <h2>Server</h2>
                        <h2>Countries</h2>
                        <h2>Blog</h2>
                    </div>

                    <div className="product">
                        <h2 className='f_p'>Engage</h2>
                        <h2>LaslesVPN ?  </h2>
                        <h2>FAQ</h2>
                        <h2>About Us</h2>
                        <h2>Privacy Policy</h2>
                        <h2>Countries</h2>
                        <h2>Terms of Service</h2>
                    </div>



                    <div className="product">
                        <h2 className='f_p'>Earn Money</h2>
                        <h2>Affiliate </h2>
                        <h2>Become Partner</h2>
                    </div>

                </div>
            </div>
        </div>

    </section>
  )
}

export default Footer