import React, { useState } from 'react'
import '../css/TextForm.css'

export default function TextForm(props) {

  const handleOnChange = (e) => {
    setText(e.target.value)
    // console.log("handleonchange was clicked")

  }
  const handleUppperClick = () => {
    // console.log("upperclick was clicked")
    let data = text.toUpperCase()
    if(data.length===0){
      props.showAlert("Error!.. Enter Text Please🙄 !","danger")
    }
    else{
      setText(data)
      props.showAlert("Converted to Upper case !","success")
    }
  }
  const handleloweClick = () => {
    // console.log('lower case')
    let data = text.toLowerCase();
    if(data.length===0){
      props.showAlert("Error!.. Enter Text Please🙄 !","danger")
    }
    else{
    setText(data);
    props.showAlert("Converted to Lower case !","success")
    }
  }
  const handleClearClick = () => {
    // console.log('lower case')
    let data = text
    if(data.length===0){
    props.showAlert("Error!.. Enter Text Please🙄 !","danger")
    }
    else{
    let data=''
    setText(data);
    props.showAlert("Text Cleared","success")}
  };
  
  // handle copy
  const handleCopy=()=>{
    let data=text
    if(data.length===0){
      props.showAlert("Error!.. Enter Text Please🙄 !","danger")
    }
    else{
    let data=document.getElementById('myBox')
    data.select()
    navigator.clipboard.writeText(data.value)
    props.showAlert("Text Copied to clipboard","success")
    }
  }
  // handle extra spaces
  const handleSpace = () => {
    let data=text
    if(data.length===0){
      props.showAlert("Error!.. Enter Text Please🙄 !","danger")
    }
    else{
      let data = text.split(/[ ]+/)
    setText(data.join(" "));
    props.showAlert("All extra spaces were removed","success")
    }
  };


  const [text, setText] = useState('')
  return (
    <>
      <div
        className="containter"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb3">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            className="form-control"
            value={text}
            placeholder="Enter your text here"
            onChange={handleOnChange}
            id="myBox"
            rows="5"
          ></textarea>
        </div>
        <button
          className="btn btn-success mx-2 my-2"
          value={text}
          onClick={handleUppperClick}
        >
          Convert to Upper case
        </button>
        <button
          className="btn btn-danger mx-2 my-2"
          value={text}
          onClick={handleloweClick}
        >
          Convert to lower case
        </button>

        <button
          className="btn btn-info mx-2 my-2"
          value={text}
          onClick={handleCopy}
        >
          Copy Text
        </button>

        <button
          className="btn btn-dark mx-2 my-2"
          value={text}
          onClick={handleSpace}
        >
          Remove Extra Space
        </button>

        <button
          className="btn btn-warning mx-2 my-2"
          value={text}
          onClick={handleClearClick}
        >
          Clear text
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text Summary</h1>
        <p>
          <b>{text.split(" ").length - 1}</b> words <b>{text.length}</b>{" "}
          characters total ..... and <b className="time">{0.008 * text.split(" ").length}</b> time will be
          taken to read your text
        </p>
        <p>
          <b className="fb_blue">Facebook</b> out of 250/ {250 - text.length}{" "}
          characters remaining..<b className="gg_red">Google</b> out of 300/{" "}
          {300 - text.length} characters remaining..
          <b className="tw_sky">Twitter</b> out of 280/ {280 - text.length}{" "}
          characters remaining
        </p>
        <h2>Preview😉</h2>
        <p>{text.length > 0 ? text : "Enter some text to preview here🥲"}</p>
      </div>
    </>
  );
}
