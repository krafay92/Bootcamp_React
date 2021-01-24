import React, {useState} from 'react';
import './App.css';
import {Comp} from './Comp.js';


function App() {  
  let [count,increaser] = useState(0);
  let [night,changer] = useState(true);
  let [init,reset] = useState(0);
  return(
    <div className = {`${ night ? 'night' : 'mor'}`}>
      <h1>Good { night ? 'Night' : 'Morning'}</h1>
      <Comp counter = {count}/>
      <button onClick = { () => increaser(++count)}>Increse</button>
      <button onClick = { () => changer(!night)}>Change day</button>      </div>
  );

}
export default App;
