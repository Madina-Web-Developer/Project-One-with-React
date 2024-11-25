import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
    <nav className='navbar' >
        <div className="container">
            <div className="main_row">
                <Link to={"/"} className="manu_logo">
                    <img src="Images/Logo.png" alt="logo" />
                </Link>
                <div className="manu">
                    <ul>
                        <li><Link to={'#'} >About</Link></li>
                        <li><Link to={'#'} >Features</Link></li>
                        <li><Link to={'#'} >Pricing</Link></li>
                        <li><Link to={'#'} >Testimonials</Link></li>
                        <li><Link to={'#'} >Help</Link></li>
                    </ul>
                </div>
                <div className="buttons">
                    <Link className='button1' to={'/form'} >Sign In</Link>
                    <Link className='button2' to={''} >Sign Up</Link>
                </div>
                
            </div>
        </div>

    </nav>
    </>
  )
}

export default Navbar