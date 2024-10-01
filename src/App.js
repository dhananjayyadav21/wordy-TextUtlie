import "./App.css";
import Alerts from "./components/Alerts";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  //different color mode
  const BlueMode = () => {
    setMystyle({
      color: "white",
      backgroundColor: "#07234b",
    });
    document.body.style.backgroundColor = "#07234b";
    showAlert("its BlueMode !", "success");
  };

  const yelloMode = () => {
    setMystyle({
      color: "white",
      backgroundColor: "#574305",
    });
    document.body.style.backgroundColor = "#574305";
    showAlert("its YellowMode !", "success");
  };

  const greenMode = () => {
    setMystyle({
      color: "white",
      backgroundColor: "#074b2b",
    });
    document.body.style.backgroundColor = "#074b2b";
    showAlert("its GreenMode !", "success");
  };

  // alert components
  const [Alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // Dark mode And light Mode
  const [mode, setMode] = useState("light");

  const [mystyle, setMystyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setMystyle({
        color: "white",
        backgroundColor: "#252629",
      });
      document.body.style.backgroundColor = "#252629";
      showAlert("Dark mode hash enable !", "success");
    } else {
      setMode("light");
      setMystyle({
        color: "black",
        backgroundColor: "white",
      });
      document.body.style.backgroundColor = "white";
      showAlert("light mode hash enable !", "success");
    }
  };

  

  //return in index html
  return (
    <>
      <Navbar
        title="Wordy"
        about="About Us"
        mode={mode}
        toggleMode={toggleMode}
        BlueMode={BlueMode}
        yelloMode={yelloMode}
        greenMode={greenMode}
      />
      <Alerts alert={Alert} />

      <div className="container my-4">
        <TextForm
          heading="Enter Here Your Text....!"
          mystyle={mystyle}
          showAlert={showAlert}
        />
      </div>
    </>
  );
}

export default App;
