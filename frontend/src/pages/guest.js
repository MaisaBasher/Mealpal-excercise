import React, { useState } from 'react';

function Guest() {
    const [Name, setName] = useState('Name');
    const [phone, setPhone] = useState('');
    const handleNameChange = (event) => {
        setName(event.target.value);
      };
    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
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
       <button> View Menue </button>
      </div>
    );
  }
  
export default Guest;