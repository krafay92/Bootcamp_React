import React , {useReducer} from 'react';
import Reducer from './Reducer';
    

const Child2 = () => {
    let [value, dispatch] = useReducer(Reducer, 0); 
    return(
        <div>
            <h1 className = "margin">Counter Using Reducer</h1>
            <h3 className = "margin">Counter Value is : {value}</h3>
            <button onClick = {() => dispatch('INCREAMENT')}>Increament</button>
            {/* Extra */}
            <button onClick = { () => dispatch('DECREAMENT')}> Decrament</button>
            <button onClick = { () => dispatch('RESET')}>Reset</button>
        </div>
    )
}

export default Child2;