import React, { useState } from "react";
import "./style.css";
const ShortCircuit = () => {
  const [text, setText] = useState("Hello Random Guy");
  //   const first = text || "First Text";
  //   const second = text && "Second Text";
  return (
    <div className="shortCircuit">
      <h1>Short Circuits</h1>
      {text ? (
        <h1>No Error</h1>
      ) : (
        <div>
          <h1>Oops!</h1>
          <p>404! Here's your error</p>
        </div>
      )}
      <button onClick={() => setText(!text)}>Toggle</button>
    </div>
  );
};

export default ShortCircuit;
