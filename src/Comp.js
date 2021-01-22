import React from 'react';

function Comp(props){
    return(
        <div>
            <h2>This is an example of {props.type}</h2>
            <h2>It is inside of {props.location}</h2>
        </div>
    );
}

export default Comp;