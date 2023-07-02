import "./App.css";
// import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import Alert from "./component/Alert";
import React, { useState } from "react";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // wether dark mode in enabled or not
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
      document.body.style.background = "#042743";
      showAlert("dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      //  setInterval(() => {
      //   document.title = "TextUtils is Amazing";
      //  }, 2000);
      //  setInterval(() => {
      //   document.title = "install TextUtils now ";
      //  }, 1500);
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      {/*<Navbar title = "Textutil" About Textutils = "About Text utils"/>*/}
      {/*<Navbar/>*/}
      {/* <Router> */}
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className=" container my-3 ">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} />
            <Route */}
             {/* exact  path="/"
              element={ */}
                <TextForm
                  showAlert={showAlert}
                  heading="enter the text to enalyze below"
                  mode={mode}
                />
              {/* }
            /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}

      {/* <About/> */}
    </>
  );
}

export default App;
