import { useState } from "react";
import { RiWhatsappFill,RiFileCopyLine } from "react-icons/ri";
import React from 'react'


export const Form = () => {
    const[phone,setphone]=useState("Hello Ramadan");
    const[message,setmessage]=useState("Ramadan waaye")


    const handChange=(event)=>{
        setphone(event.target.value)
        console.log(phone);
    }

    const smsChange=(e)=>{
        setmessage(e.target.value)
        console.log(message)
    }
  return (
    <div className="container">
        <form>
        <header>
            <h1>What'sapp Generator</h1>
            <RiWhatsappFill className="whatsapp-icon"/>

        </header>

        <div className="raw">
            <label htmlFor="phone">Enter your phone number</label>
            <input type="text" className="form-control"
            placeholder="Enter your phone number" name="phone"
            onChange={handChange}
            />
        </div>

        <div className='row'>
            <label htmlFor="Message">Enter your Message</label>
            <textarea name="message" cols="60" rows="3"
            className="form-control" placeholder="Enter you message"
            onChange={smsChange}
            ></textarea>
        </div>
        <button className='btn'>Generate</button>
       <div className="result-erea">
           
           <input type="text" readOnly='true'
           className="form-control-result"
           />

           <div className="result-text">
           <label>coppy to clipord</label>
           <RiFileCopyLine className="coppy-icon"/>


           </div>
       </div>
        </form>
    </div>
    
  )
}
