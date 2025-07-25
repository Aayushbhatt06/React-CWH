import React, {useState} from 'react'

export default function TextForm(props) {
  const [readingSpeed, setReadingSpeed] = useState(250);
    const handleUpClick = () => {
        let newTxt = text.toUpperCase()
        setText(newTxt)
        props.showAlert("Text was set to Uppercase", "success")
    }

    const handleclear = () => {
      setText('')
      props.showAlert("Text was Cleared", "success")
    }

    const handleCapClick = () => {
    let words = text.split(" ");
    let capitalizedWords = words.map(word => {
      if (word.length === 0) return "";
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
    let newText = capitalizedWords.join(" ");
    setText(newText);
    props.showAlert("Text was Aranged", "success")
};


    const handleSpeedChange = (event) => {
    setReadingSpeed(Number(event.target.value));
  };

    const handleLoClick = () => {
        let newTxt = text.toLowerCase()
        setText(newTxt)
        props.showAlert("Text was set to Lowercase", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text was Copied", "success")
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces were removed", "success")
    }

    const [text,setText] = useState('')
  return (
    <div>
       <h1>{props.heading}</h1>  
    <div className="mb-3">
        <textarea className="form-control" value = {text} id="myBox" placeholder='Enter Text Here' onChange={handleOnChange}rows="8"></textarea>    
    </div>
    <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2 my-1" onClick={handleCapClick}>hello - Hello</button>
    <button className="btn btn-primary mx-2 my-1" onClick={handleclear}>Clear Text</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    <div className="container">
      <h2 className="my-3">Your Summary</h2>
      <p className="Summary">{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words         {text.length} Characters</p>
      {/* <input className="form-control me-2" type="search" placeholder="Reading Speed" aria-label="Search"/> */}
      <input
          className="form-control me-2"
          type="number"
          placeholder="Enter reading speed (words/min)"
          // value={readingSpeed}
          onChange={handleSpeedChange}
        />
      <p className="time">{text.split(" ").filter((element)=>{return element.length!==0}).length  /readingSpeed} minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </div>
  )
}
