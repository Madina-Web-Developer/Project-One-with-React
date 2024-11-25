import React from 'react'
import { FaUserLarge } from "react-icons/fa6";
import './Counter.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaBarsProgress } from "react-icons/fa6";
import CountUp from 'react-countup';

const Counter = () => {
  return (
    <section className='mina_counter'>
      <div className="container">
       <div className="mina_count">

                <div className="s_count">

                     <div className="live_counter">

                     <div className="icon">

                      <FaUserLarge className='m' />

                     </div>

                     <div className="number">

                     <div className="s_c">
                     <CountUp end={90} duration={5.5}/>
                     <h1>+</h1>

                     </div>
                     
                      <p>Users</p>
                     </div>

                    </div>
        
                    <div className="stick">
                       <span></span>
                    </div>
                    
                </div>

                <div className="s_count">

                    <div className="live_counter2">

                     <div className="icon">

                     <FaLocationDot className='m'/>

                     </div>

                     <div className="number">

                     <div className="s_c">
                     <CountUp end={30} duration={8.5}/>
                     <h1>+</h1>

                     </div>

                      <p>Locations</p>
                     </div>

                    </div>
        
                    <div className="stick">
                       <span></span>
                    </div>
                    
                </div>

                <div className="s_count">

                    <div className="live_counter">

                     <div className="icon">

                     <FaBarsProgress className='m'/>

                     </div>

                     <div className="number">

                     <div className="s_c">
                     <CountUp end={50} duration={7.5}/>
                     <h1>+</h1>

                     </div>
                      <p>Servers</p>
                     </div>

                    </div>
                    
                </div>
            </div>
          </div>
    </section>

  )
}

export default Counter