import React ,{useState} from 'react';
import Button from './Button'; 
import Display from './Display';

const DisplayButton = (props) => {
    const [counter, setCounter] = useState(0); 
    const updateCounter=(val)=>setCounter(counter + val);
    return (
        <div>
         <Display amout={counter}/> 
         <Button  val={props.IncreaseAmount} increaseCounter = {updateCounter} />  

        </div>  
    );
}

export default DisplayButton;