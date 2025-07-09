
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (msg,type) => {
    setAlert({
      messege : msg,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    },2000)
  }

  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.background = 'white'
      document.body.style.color = 'black'
      document.getElementById('myBox').style.background = 'white'
      document.getElementById('myBox').style.color = 'black'
      showAlert('Light mode is active' , 'success')
    }else{
      setMode('dark')
      document.body.style.background = '#323e49'
      document.body.style.color = 'white'
      document.getElementById('myBox').style.background = '#838a91'
      document.getElementById('myBox').style.color = 'black'
      showAlert('Dark mode is active' , 'success')
    }
  }
  return (
    <>
    <Navbar  title = "TextUtils" mode={mode} toggleMode = {toggleMode} About = "About TextUtils"/>
    <Alert alert = {alert}/>
    <div className="container my-3">
    <TextForm showAlert = {showAlert} heading = "Enter the text to analyze" />
    <About/>
    </div>
    </>
  );
}

export default App;
