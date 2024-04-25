import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText("You Have Clicked on HandleUpClick");
    setText(newText);
    props.showAlert(" Convert to UpperCase", "Success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText("You Have Clicked on HandleUpClick");
    props.showAlert(" Convert to LowerCase", "Success");

    setText(newText);
  };

  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert(" Clear Text", "Success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert(" Copied to Clipboard text", "Success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Remove to Extra Space Case", "Success");
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === `dark` ? `white` : `#042743`,
        }}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === `dark` ? `gray` : `white`,
              color: "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          <i>Convert To UperCase</i>
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          <i>Convert To LowerCase</i>
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>
          <i>Remove Ex Space</i>
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          <i>Clear</i>
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          <i>Copy</i>
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === `dark` ? `white` : `#042743`,
        }}
      >
        <h1>
          <i>Your Text Summary</i>
        </h1>
        <p>
          {text.split(" ").length}
          <i> words and </i>
          {text.split("").length}
          <span></span>
          <i>Characters</i>
        </p>
        <p>
          {0.008 * text.split(" ").length}
          <i>Minute read</i>
        </p>
        <h2>
          <i>Preview</i>
        </h2>
        <p>
          {text.length > 0 ? (
            text
          ) : (
            <i>Enter Something in the Text Analyze Box above to Preview Here</i>
          )}
        </p>
        <hr />
      </div>
    </>
  );
}
