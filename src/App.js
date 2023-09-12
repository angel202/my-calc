import React, { useState } from 'react';
import './App.css';
import Buttons from './button';

function App() {
const [inputs, setInputs] = useState([]); 
const [res, setRes] = useState([]);
const clearInput = () =>{
  setInputs([]); 
  setRes([]);
};
const getInput = (e) => {
  setInputs([...inputs, e.target.value]); //...inputs grabs the prev values
  //console.log(inputs);
};

const evalu = () =>{
    const str = inputs.join('')
    const result = eval(str);
    setRes([result]);
    setInputs([result]);
}; 

  return (
    <div className="App">
      <div className="app-title">
        <h1> Basic Calculator</h1>
      </div>
      <div className='Container'>
        <div className='display'>
          <input className='answer' value={inputs.join('')} readOnly></input>
          <input className='displayAnsw' value={res} readOnly></input>
        </div>
        <div className='Button-Wrapper'>
          <Buttons className='Button' onClick = {clearInput} name = 'AC'/> 
          <Buttons className='Button' onClick = {getInput}  name = '0'/> 
          <Buttons className='Button' onClick = {getInput}  name = '1'/> 
          <Buttons className='Button' onClick = {getInput}  name = '2'/> 
          <Buttons className='Button' onClick = {getInput}  name = '3'/> 
          <Buttons className='Button' onClick = {getInput}  name = '4'/> 
          <Buttons className='Button' onClick = {getInput}  name = '5'/> 
          <Buttons className='Button' onClick = {getInput}  name = '6'/> 
          <Buttons className='Button' onClick = {getInput}  name = '7'/> 
          <Buttons className='Button' onClick = {getInput}  name = '8'/> 
          <Buttons className='Button' onClick = {getInput}  name = '9'/>
          <Buttons className='Button' onClick = {getInput}  name = '.'/> 
          <Buttons className='Button' onClick = {getInput}  name = '+'/> 
          <Buttons className='Button' onClick = {getInput}  name = '-'/> 
          <Buttons className='Button' onClick = {getInput}  name = '/'/> 
          <Buttons className='Button' onClick = {getInput}  name = '*'/> 
          <Buttons className ='results' onClick = {evalu} name = 'result'/> 
        </div>
      </div>
    </div>
  );
}

export default App;
