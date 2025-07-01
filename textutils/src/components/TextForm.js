import React, {useState} from 'react'

export default function TextForm(props) {
  const [readingSpeed, setReadingSpeed] = useState(250);
    const handleUpClick = () => {
        let newTxt = text.toUpperCase()
        setText(newTxt)
    }

    const handleSpeedChange = (event) => {
    setReadingSpeed(Number(event.target.value));
  };

    const handleLoClick = () => {
        let newTxt = text.toLowerCase()
        setText(newTxt)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text,setText] = useState('Enter Your Text Here')
  return (
    <div>
       <h1>{props.heading}</h1>  
    <div className="mb-3">
        <textarea className="form-control" value = {text} id="myBox" onChange={handleOnChange}rows="8"></textarea>    
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    <div className="container">
      <h2 className="my-3">Your Summary</h2>
      <p className="Summary">{text.split(" ").length} words         {text.length} Characters</p>
      {/* <input className="form-control me-2" type="search" placeholder="Reading Speed" aria-label="Search"/> */}
      <input
          className="form-control me-2"
          type="number"
          placeholder="Enter reading speed (words/min)"
          value={readingSpeed}
          onChange={handleSpeedChange}
        />
      <p className="time">{text.split(" ").length/readingSpeed} minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </div>
  )
}
