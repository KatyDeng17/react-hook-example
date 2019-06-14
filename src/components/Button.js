import React from 'react';

const Button = (props) => (
    
    <button onClick={()=>(props.increaseCounter(props.val))}> +{props.val}</button>
)


export default Button;