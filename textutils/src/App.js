
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
    <Navbar title = "TextUtils" About = "About TextUtils"/>
    <div className="container my-3">
      <TextForm heading = "Enter the text to analyze" />
    </div>
    </>
  );
}

export default App;
