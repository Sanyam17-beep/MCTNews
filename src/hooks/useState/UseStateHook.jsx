import React, { useState } from "react";
import "./style.css";
const UseStateHook = () => {
  const [mode, setMode] = useState({
    backgroundColor: "black",
    color: "white",
    text: "Enable Darkmode",
  });
  const [text, setText] = useState("Enable Lightmode");
  const [data, setData] = useState({
    name: "Haris",
    age: 233,
    message: "Hello Random",
  });
  //   const [name, setName] = useState("Haris");
  //   const [age, setAge] = useState(233);
  //   const [message, setMessage] = useState("Hello Random");

  const enableDarkMode = () => {
    if (mode.backgroundColor === "black") {
      setMode({
        backgroundColor: "white",
        color: "black",
      });
      setText("Enable Darkmode");
    } else {
      setMode({
        backgroundColor: "black",
        color: "white",
      });
      setText("Enable Lightmode");
    }
  };

  return (
    <div className="modeClass" style={mode}>
      <button onClick={enableDarkMode}>{text}</button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>{data.name}</h1>
        <h2>{data.age}</h2>
        <h3>{data.message}</h3>
        <button onClick={() => setData({ ...data, message: "Hello Everyone" })}>
          Click me
        </button>
      </div>
    </div>
  );
};

export default UseStateHook;
