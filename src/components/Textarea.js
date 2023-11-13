import { clear } from '@testing-library/user-event/dist/clear'
import React, { useState } from 'react'
export default function Textarea(props) {
  const uppercase = ()=>{
    let uppercasetext = text.toUpperCase()
    setText(uppercasetext)
  }
  const change = (event)=>{
    console.log("Change");
    setText(event.target.value)
  }
  const lowercase = ()=>{
    let lowercasetext = text.toLowerCase()
    setText(lowercasetext)
  }
 
  const clear = ()=>{
    let cleartext = "";
    setText(cleartext)
  }
  const[textcolor, setcolor] = useState("black");
  const [text, setText] = useState("Enter your text");
  return (
    <>
    <div className="mb-3">
      <h1>Text analyzer</h1>
      <textarea className="form-control" value={text} onChange={change} id="exampleInputPassword1" rows="15" />
      <button className="btn btn-primary my-3 mx-2" id='click' onClick={uppercase}>Convert to Uppercase</button>
      <button className="btn btn-primary my-3 mx-2" id='click' onClick={lowercase}>Convert to Lowercase</button>
      <button className='btn btn-primary my-3 ' id='click' onClick={clear}>clear</button>
      </div>
    <div className="container">
      <h1>Text Summary</h1>
      <p>No. of words {text.split(" ").length}</p>
      <p>No. of characters {text.length}</p>
      <h1>
        Preview
      </h1>
      <p>{text}</p>
    </div>
    </>
  )
}
