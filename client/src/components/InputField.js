import React from 'react'
import "./InputField.css"
function Input() {
  return (
    <div>
      <div className="greetings">
        <p>Welcome, Mr. Parvesh Ahamed</p>
      </div>
      <div className="text-box">
        <input type="text" placeholder='create todo ... 👀'></input> 
        <button>+</button>
      </div>
    </div>
  );
}

export default Input