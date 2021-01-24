import React from 'react';
import App from './App.css';

export function Comp(props){
    return(
       <h1 className = 'margin'>Counter Value is : {props.counter}</h1>
    );
}

// export Comp;