import Guest from './guest.js';
import Welcome from './welcome.js';
import React  from 'react';
import '../stylesheets/style.css';

function App() {
  return (
    <div className='center'>
      <Welcome/>
      <Guest/> 
    </div>
  );
}

export default App;
