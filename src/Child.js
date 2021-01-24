import React, {useContext} from 'react';
import counterContext from "./Contextapi";


const Child = () => {

    let counter = useContext(counterContext);

    return(
        <div>
            <h1 className = "margin">Counter Using Context Api</h1>
            <h3 className = "margin">Counter Value is : {counter[0]}</h3>
           <button className = "margin" onClick = {() => {(counter[1])(++counter[0])}}>Increament</button>
        </div>   
    )
}

export default Child;
