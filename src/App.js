import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'
import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  const handleDark=()=>{
    if(mode==='light'){
      setMode('dark');
      setEdDark('Disable Dark Mode')

      document.body.style.backgroundColor='#000000';
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light');
         document.body.style.backgroundColor='white';
         setEdDark('Enable Dark Mode')
         showAlert("Light mode has been enabled","success")
    }
  }
  const showAlert=(message,type)=>{
    setAlert({
      msg :message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  const [mode,setMode]=useState('light')
  const [edDark,setEdDark]=useState('Enable Dark Mode')
  const [alert, setAlert] = useState(null)
  return (
<>
  {/* <Router> */}
<Navbar title={'Text-Util'} about={'About Us'} mode={mode} handleDark={handleDark} xyz={edDark}/>
<Alert alert={alert}/>
   {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
         
          <Route path="/"> */}
            <TextForm showAlert={showAlert} heading='Enter your text below' mode={mode}/>
          {/* </Route>
        </Switch> */}
{/* <About/> */}

{/* </Router> */}
</>
  );
}

export default App;
