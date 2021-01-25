import React, {useState} from 'react';
import Par from "./Parent";
import counterContext from "./Contextapi";
import Usestate from './useState';
import './App.css';


function App() {  

let counterArray = useState(0);

  return(
    <counterContext.Provider value = {counterArray}>
      <div>
        <Par />
        <Usestate />
      </div>
    </counterContext.Provider>
      
  );

}
export default App;
