import React, { useState } from "react";
import Loader from "./loader";
const ConditionalRendering = () => {
  const [isLoading, setIsLoading] = useState(false);
  if (isLoading) {
    return <Loader />;
  }
  return <h1>Hey</h1>;
};

export default ConditionalRendering;
