import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Dinner from './Dinner';

function App() {

  let [isMorning, setMorning]=useState(true);
  return(
      <div className={`box ${isMorning ? 'dayLight' : ''}`}>
         <h1>Day time = {isMorning ? 'Morning' : 'Night'}</h1>
         <button onClick={()=>setMorning(!isMorning)}>update day</button>
      </div>
  );
}

export default App;
