import React from 'react'
import './Plan.css'
import { IoIosCheckmark } from "react-icons/io";
import { Link } from 'react-router-dom';

const Plan = () => {
  return (
    <section className='plan_madina'>
        <div className="container">

            <div className="mina_plan_text">
                <h1>Choose Your Plan</h1>
                <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
            </div>
            
            <div className="mina_main_card">

                <div className="m_s_card">

                    <div className="mina_p_img">
                        <div className="pp">
                        <img className='p_m' src="Images/Free.png" alt="plan_img" />
                        </div>
                        <p>Free Plan</p>
                    </div>

                    <div className="mina_list">
                        <div className="icon_list">
                            <div className="plan_icon">
                            <IoIosCheckmark className='p_icon' />
                             <p>Unlimited Bandwitch</p>
                            </div> 

                            <div className="plan_icon">
                            <IoIosCheckmark className='p_icon' />
                             <p>Encrypted Connection</p>
                            </div> 

                            <div className="plan_icon">
                            <IoIosCheckmark className='p_icon' />
                             <p>No Traffic Logs</p>
                            </div> 

                            <div className="plan_icon">
                            <IoIosCheckmark className='p_icon' />
                             <p>Works on All Devices</p>
                            </div> 
                        </div>
                    </div>

                    <div className="plan_b1">
                        <h1>Free</h1>
                        <Link to={''} className='p_button'>Select</Link>
                    </div>

                </div>

                <div className="m_s_card">

                    <div className="mina_p_img">
                        <div className="pp">
                        <img className='p_m' src="Images/Free.png" alt="plan_img" />
                        </div>
                        <p>Standard Plan</p>
                    </div>
                    <div className="mina_list">

                        <div className="icon_list">
                            <div className="plan_icon">
                            <IoIosCheckmark className='p_icon' />
                             <p>Unlimited Bandwitch</p>
                            </div> 

                            <div className="plan_icon">
                            <IoIosCheckmark className='p_icon' />
                             <p>Encrypted Connection</p>
                            </div> 

                            <div className="plan_icon">
                            <IoIosCheckmark className='p_icon' />
                             <p>No Traffic Logs</p>
                            </div> 

                            <div className="plan_icon">
                            <IoIosCheckmark className='p_icon' />
                             <p>Works on All Devices</p>
                            </div> 

                            <div className="plan_icon">
                            <IoIosCheckmark className='p_icon' />
                             <p>Connect Anyware</p>
                            </div> 
                        </div>
                    </div>
                    <div className="plan_b2">
                        <h1>$9 <span className='pspam'>/ mo</span></h1>
                        <Link to={''} className='p_button'>Select</Link>
                    </div>

                </div>

                <div className="m_s_card">

                    <div className="mina_p_img">
                        <div className="pp">
                        <img className='p_m' src="Images/Free.png" alt="plan_img" />
                        </div>
                        <p>Premium Plan</p>
                    </div>
                    <div className="mina_list">
                        <div className="icon_list">
                            <div className="plan_icon">
                            <IoIosCheckmark className='p_icon' />
                             <p>Unlimited Bandwitch</p>
                            </div> 

                            <div className="plan_icon">
                            <IoIosCheckmark className='p_icon' />
                             <p>Encrypted Connection</p>
                            </div> 

                            <div className="plan_icon">
                            <IoIosCheckmark className='p_icon' />
                             <p>No Traffic Logs</p>
                            </div> 

                            <div className="plan_icon">
                            <IoIosCheckmark className='p_icon' />
                             <p>Works on All Devices</p>
                            </div> 


                            <div className="plan_icon">
                            <IoIosCheckmark className='p_icon' />
                             <p>Connect Anyware</p>
                            </div> 


                            <div className="plan_icon">
                            <IoIosCheckmark className='p_icon' />
                             <p>Get New Features</p>
                            </div> 



                        </div>
                    </div>
                    <div className="plan_b3">
                    <h1>$12 <span className='pspam'>/ mo</span></h1>
                        <Link to={''} className='p_button'>Select</Link>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Plan