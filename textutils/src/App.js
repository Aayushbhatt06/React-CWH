import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.background = 'white';
      document.body.style.color = 'black';
      const myBox = document.getElementById('myBox');
      if (myBox) {
        myBox.style.background = 'white';
        myBox.style.color = 'black';
      }
      showAlert('Light mode is active', 'success');
    } else {
      setMode('dark');
      document.body.style.background = '#323e49';
      document.body.style.color = 'white';
      const myBox = document.getElementById('myBox');
      if (myBox) {
        myBox.style.background = '#838a91';
        myBox.style.color = 'black';
      }
      showAlert('Dark mode is active', 'success');
    }
  };

  return (
    // <Router>
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} About="About TextUtils" />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" />} />
          <Route path="/about" element={<About />} />
        </Routes> */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" />
      </div>
    </>
    // </Router>
  );
}

export default App;
