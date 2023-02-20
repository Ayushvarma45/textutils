import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    // setText("you  hava click on handleupClick")
    props.showAlert("Converted to upper case!", "success");
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    // setText("you  hava click on handleupClick")
    props.showAlert("Converted to lower case!", "success");
  };
  const handleClearClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = "";
    setText(newText);
    // setText("you  hava click on handleupClick")
    props.showAlert("Cleared text!", "success");
  };

  const ReverseText = () => {
    setText(text.split("").reverse().join(""));
    props.showAlert("Reverse text!", "success");
  };
  const handleOnChange = (event) => {
    // console.log("On change ");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // text = "next text "; // wrong way to use
  // setText ( "new text");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary  mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary  mx-2" onClick={handleClearClick}>
          Clear text
        </button>
        <button className="btn btn-primary  mx-2" onClick={ReverseText}>
          Reverse text
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Reading Times</p>
        <p>{0.0066 * text.split(" ").length} Minutes Speaking Time</p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in box to preview"}</p>
      </div>
    </>
  );
}
