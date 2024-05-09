import React, { useState } from 'react';
import axios from 'axios';

function Guest() {
    const [name, setName] = useState('Name');
    const [phone, setPhone] = useState('');
    const handleNameChange = (event) => {
        setName(event.target.value);
      };
    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
      };
    const handleButton = async (event) => {
        axios.post('http://localhost:8081',{name, phone})
        .then( res =>{
            console.log(res);
        }).catch(err => console.log(err.response.data));
      };
    return (
      <div >
        <p >
            Please provide your full name and phone number.
        </p>
        <input
            type="Name"
            placeholder="Name"
            onChange={handleNameChange}
         />
         <input
            type="Phone"
            placeholder="Phone Number"
            onChange={handlePhoneChange}
         />
       <button onClick={handleButton}> View Menue </button>
      </div>
    );
  }
  
export default Guest;