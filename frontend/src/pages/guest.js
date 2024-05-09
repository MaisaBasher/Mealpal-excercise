import React, { useState } from 'react';
import axios from 'axios';
import '../stylesheets/style.css';

function Guest() {
    const [name, setName] = useState('Name');
    const [phone, setPhone] = useState('');
    const [nerr, setNErr] = useState(false);
    const [perrM, setPErrM] = useState("");
    const [perr, setPErr] = useState(false);
    const [success, setSuccess] = useState(false);
    
    const handleNameChange = (event) => {
        setName(event.target.value);
      };
    
      const handlePhoneChange = (event) => {
        setPhone(event.target.value);
      };
    
    const handleButton = (event) => {
        setPErr(false);
        setNErr(false);
        axios.post('http://localhost:8081',{name, phone})
        .then( res =>{
            console.log(res.status);
            setSuccess(true);
        }).catch(err => {
          setSuccess(false);
          
          const errMessage = err.response.data;
         
          for(let i = 2;i < errMessage.split(" ").length;i++){
            let mess = errMessage.split(" ")[i];
            console.log(mess)
            if(mess === "name") setNErr(true);
            if (mess ===  "phone") {setPErrM("(* numbers only (ex. 1231231234))"); setPErr(true)}
            if (mess === "numErr") {setPErrM("* invalid number (number should be 10/11 digits)"); setPErr(true)}
          }
        });
      };
    

    if(nerr) {
      document.getElementById('n').style.borderColor = 'red';
    }
    if(perr) {
      document.getElementById('p').style.borderColor = 'red';
    }



    return (
      <div >
       
        <input id = "n"
            type="Name"
            placeholder="Name"
            onChange={handleNameChange}
         />
         {nerr && <p className='error'>* must be your first and last name</p>}
         <input id = "p"
            type="Phone"
            placeholder="Phone Number"
            onChange={handlePhoneChange}
         />
         {perr && <p className='error'>{perrM}</p>}
         {success && <p className='success'>Thank you</p>}
       <button onClick={handleButton}> View Menu </button>
      </div>
    );
  }
  
export default Guest;