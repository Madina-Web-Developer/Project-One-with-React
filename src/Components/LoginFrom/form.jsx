import React, { useState } from 'react'
import { toast, Zoom } from 'react-toastify'
import './login.css'

const form = () => {

    // ======== Custom UseState ==========//

   const [email , setEmail] = useState('')
   const [pass , setPass] = useState('')
   const [emailError , setEmailError] = useState('')
   const [passError, setpassError] =useState('')



    // ========== All Function =============//

    const handelemail = (item)=>{
      setEmail(item.target.value)
      setEmailError('')
    }

    const handelpass = (item)=>{
      setPass(item.target.value)
      setpassError('')
    }

   const hundelSubmit = (e)=>{

     e.preventDefault()

    if(email == ''){

      setEmailError('Please Enter Your Email')
    }else{

      setEmailError('')
    }

    if(pass == ''){
      setpassError('Please Enter Your Password')
    }
    else{
      setpassError('')

      toast.success('Login Succesfull', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
        });
    }

   }
    

  return (
    <>
    <div className="div">
        <div className="madina_log">

        <h1>Login Form</h1>
      <form>
        {/* ====== Email Input ========= */}
        <h2>Email :</h2>
        <input onChange={(e)=>handelemail(e)} type="mail" />
        <h3>{emailError}</h3>

        {/* ========= Password Input ======= */}
        <h2>Password :</h2>
        <input onChange={(e)=>handelpass(e)} type="password" />
        <h3>{passError}</h3>

        {/* ===== Button ================== */}

        <div className="log_button">
            <button onClick={hundelSubmit} className='l_b'>Login</button>
        </div>
      </form>

      <p>Don't have account ? <span>Create one</span></p>
        </div>
    </div>
    </>
  )
}

export default form