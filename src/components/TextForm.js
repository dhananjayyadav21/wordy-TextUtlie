import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here");

  //for convert in Upper case
  const handleUpperclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert into Uppercase", "success");
  };

   //for convert in Lowwer case
   const handleLowerclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert into lowercase", "success");
  };

  //for handle copy 
  const handlecopy = ()=>{
    let newtext = document.getElementById('mybox');
    newtext.select();
    navigator.clipboard.writeText(newtext.value);
    props.showAlert("Coppy in Clipboard", "success");
  }

   //for handle Cleare
   const handleClear = ()=>{
    let newtext = '';
    setText(newtext);
    props.showAlert("Clear Text ", "success");

  }

  //for text after changes rechange text
  const handleupperchange = (event) => {
    setText(event.target.value);
  };

 
  return (
    <div style={props.mystyle}>
      <div className="container">
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea className="form-control"value={text} onChange={handleupperchange} id="mybox" rows="8"></textarea>
      </div>
      <div>
        <button className="btn btn-outline-warning mx-1" onClick={handleUpperclick}> Upper Case</button>
        <button className="btn btn-outline-danger mx-1" onClick={handleLowerclick}>Lower case</button>
        <button className="btn btn-outline-primary mx-1" onClick={handlecopy}>Copy Text</button>
        <button className="btn btn-outline-success mx-1" onClick={handleClear}>Cleare Text</button>
      </div>
      </div>
      <div className="container my-5">
        <h3>Text Summary</h3>
        <p>{text.split(" ").length} Words & {text.length} Characters</p>
        <p>Read In {0.008 * text.split(" ").length} Minutes</p>
        <h3>Text Previwe</h3>
        <p>{text.length>0?text:'Entere in the text area somthing to preview it here'}</p>
      </div>
    </div>
  );
}
