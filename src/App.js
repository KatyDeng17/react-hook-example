import React,{useState} from 'react';
import './App.css';
import DisplayButton from './components/DisplayButton'; 

const App=()=> {
  let displayButton ;

  return (
    <div className="App">
        <DisplayButton  IncreaseAmount = {1}/>
    </div>
  );
}

export default App;
