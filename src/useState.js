import React, { useState} from 'react';


let Usestate = () => {

    let counter = useState(0);

    return(
        <div>
            <h1 className = "margin">Counter Using useState</h1>
            <h2 className = "margin">Counter Value is : {counter[0]}</h2>
            <button onClick = { () => {(counter[1])(++counter[0])} }>Increament</button>
        </div>
    )
}

export default Usestate;