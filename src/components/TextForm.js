/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-character-class */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-globals */
import React,{ useState } from 'react'
export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("UpperCase Was Clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted To UpperCase","success")
    }
    const handleLoClick = () => {
        console.log("LowerCase Was Clicked" + text)
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted To LowerCase","success")
    }
    const handleClearClick = () => {
        // console.log("Clear Was Clicked" + text)
        let newText = ""
        setText(newText)
        props.showAlert("Text Has Cleared","success")
    }
    const handleCopy = () => {
        // console.log("Clear Was Clicked" + text)
        // var text = document.getElementById("myBox");
        // text.select()
        // navigator.clipboard.writeText(text.value)
        navigator.clipboard.writeText(text)
        props.showAlert("Text Has Copied","success")
    }
    const handleRemoveSpace = () => {
        // var newText = text.split(/[ ]+/)
        // setText(newText.join(" "))
        var newText = text.replace(/\s+/g,' ')
        setText(newText)
        props.showAlert("Space Has Removed","success")
    }
    const handleOnChange = () => {
        // console.log("On Change")
        setText(event.target.value);
    }
    
    const [text, setText] = useState("");
    return (
        <>
    <div className={`container text-${props.mode==='dark'?'light':'dark'}`}>
            <h2>{props.heading}</h2>
            <div className="my-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor : props.mode==="dark"?"grey":"white", color : props.mode==="dark"?"white":"black"}} id="myBox" rows="10"></textarea>
                <button className="btn btn-warning my-2 mx-2" onClick={handleUpClick} >Covert To Uppercase</button>
                <button className="btn btn-warning my-2 mx-2" onClick={handleLoClick} >Covert To Lowercase</button>
                <button className="btn btn-warning my-2 mx-2" onClick={handleClearClick} >Clear Text</button>
                <button className="btn btn-warning my-2 mx-2" onClick={handleCopy} >Copy Text</button>
                <button className="btn btn-warning my-2 mx-2" onClick={handleRemoveSpace} >Remove Extra Space</button>

            </div>
        </div>
        <div className="container" style = {{color : props.mode === "dark"?"white":"black"}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").filter((e)=>{return e.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((e)=>{return e.length!==0}).length} minutes time to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing To Preview It Here"}</p>
        </div>
        </>
    )
}
