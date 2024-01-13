import React, { useState } from "react";

export default function TextForm(prop) {
  const emailRegex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

  const [text, setText] = useState("");
  const [mail, setMail] = useState("");

  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    prop.showAlert("Uppercase was clicked", "success");
  };
  const handleEmail = () => {
    const email = text.match(emailRegex);
    console.log(email);
    let newMail = email.join(" ");
    setMail(newMail);
    // let newText=email;
    // setText(newText);
    prop.showAlert("Emails are copied to clipboard", "success");
  };
  const handleLowClick = () => {
    console.log("Lowecase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    prop.showAlert("Lowercase was clicked", "success");
  };
  const handleClear = () => {
    console.log("Textarea cleared!");
    let newText = "";
    setText(newText);
    setMail(newText);
    prop.showAlert("Textarea cleared!", "success");
  };;
  function handleOnChange(event) {
    // console.log("handle on change method called");
    setText(event.target.value);
  }

  // let count = text.length && text.split(" ").length;
  // Assuming text is a string from a text field
  let count = text.length && text.trim().split(/\s+/).length;

  return (
    <>
      <div className="container ">
        <h1>{prop.heading}</h1>
        <div className="mb-3 " >
          <textarea
            style={prop.mode==='light'?{backgroundColor:'white',color:'black'}:{backgroundColor:'black',color:'white'}}
            onChange={handleOnChange}
            value={text}
            className="form-control"
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button onClick={handleUpClick} className="btn btn-primary mx-2">
          Convert to UpperCaser
        </button>
        <button onClick={handleLowClick} className="btn btn-primary">
          Convert to LowerCase
        </button>
        <button onClick={handleClear} className="btn btn-primary mx-2">
          Clear Text
        </button>
        <button onClick={handleEmail} className="btn btn-primary">
          Extract Email
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {" "}
          {count} words, {text.length} characters.
        </p>
        <p>{0.008 * count} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in the text area above to preview it here...'}</p>
        <h2>The email found in the given text is: </h2>
        <p>{mail}</p>
      </div>
    </>
  );
}
