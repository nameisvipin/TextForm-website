

// import "./App.css";
// import About from "./components/About";
// import Navbar from "./components/Navbar";
// import { useState } from 'react';
// import TextForm from "./components/TextForm";
// import Alert from './components/Alert'


// export default function App() {
//   const [mode, setMode] = useState('light');
//   const [alert, setAlert] = useState(null);

//   const showAlert = (message, type) => {
//     setAlert({
//       msg: message,
//       type: type
//     })
//     setTimeout(() => { setAlert(null) }, 1500)

//   }
//   const toggleMode = () => {
//     if (mode === 'light') {
//       setMode('dark');
//       showAlert('Dark mode has been enabled', 'success')
//       document.body.style.backgroundColor = 'black';
//       document.body.style.color = 'white';
//     } else {
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//       document.body.style.color = 'black';
//       showAlert('Light mode has been enabled', 'success');
//     }
//   }
//   return (
//     <>

//       <Navbar Title="TextUtils" toggleMode={toggleMode} mode={mode} />
//       <Alert alert={alert} />

//       <div className="container my-3">
       
//           {/* <About /> */}
//           <TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode} />
       
//       </div>

//     </>
//   );
// }

import React from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { useState } from "react";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark mode has been enabled", "success");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <Router>
      <>
        <Navbar Title="TextUtils" toggleMode={toggleMode} mode={mode} />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/textform" element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode} />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}
