import './button.css'
import React from 'react'


function Buttons ({name, className, onClick }) {

    return (
      <div className = {className}>
        <button value = {name} onClick = {onClick}> {name} </button>
      </div>
    );
  }
  
  export default Buttons;