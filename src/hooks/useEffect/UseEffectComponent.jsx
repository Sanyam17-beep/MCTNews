import React, { useEffect, useState } from "react";

const UseEffectComponent = () => {
  const [value, setValue] = useState(0);
  const [size, setSize] = useState(window.innerWidth);
  const resizeWindow = () => {
    console.log("Resizing window");
    setSize(window.innerWidth);
  };
  useEffect(() => {
    // if (value > 0) {
    // }
    document.title = `New Title : ${value}`;
    // window.addEventListener("resize", resizeWindow);
  }, [value]);
  {
    console.log("Component Rendering");
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>useEffect Component</h1>
      <h1>Window : {size}px</h1>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Update Value</button>
    </div>
  );
};

export default UseEffectComponent;
