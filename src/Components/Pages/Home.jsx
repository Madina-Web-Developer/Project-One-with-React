import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../Banner/Banner'
import Counter from '../Counter/Counter'
import Use from '../UsePart/Use'
import Plan from '../Plan/Plan'
import Map from '../Map/Map'
import Happy from '../Happy Customers Part/Happy'
import Cslider from '../../Cslider/Cslider'
import Subcribe from '../Subcribe/Subcribe'
import Footer from '../Footer/Footer'




const Home = () => {
  return (
    <>

   <Banner/>
   <Counter/>
   <Use/>
   <Plan/>
   <Map/>
   <Happy/>
   <Cslider/>
   <Subcribe/>
   <Footer/>
   
   
    </>
  )
}

export default Home