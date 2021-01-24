import React, {useState} from 'react';
import Par from "./Parent";
import counterContext from "./Contextapi";
import './App.css';


function App() {  

let counterArray = useState(0);

  return(
    <counterContext.Provider value = {counterArray}>
      <div>
        <Par />
      </div>
    </counterContext.Provider>
      
  );

}
export default App;
