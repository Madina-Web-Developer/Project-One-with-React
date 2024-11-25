import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Mobile from '../Navbar/MobileNav/Mobile'

const Layoutone = () => {
  return (
    <>
    
    <Navbar/>
    <Mobile/>
    <Outlet/>
    
    </>
  )
}

export default Layoutone