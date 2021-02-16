import React, { createContext, useState } from "react";

export const CounterContext = createContext();

const CounterContextContainer = (props) => {
  const [counterValue, setCounterValue] = useState(0);

  const handleChange = (operationType) => {
    operationType === "add"
      ? setCounterValue((prevState) => prevState + 1)
      : setCounterValue((prevState) => prevState - 1);
  };

  return (
    <CounterContext.Provider value={{ counterValue, handleChange }}>
      {props.children}
    </CounterContext.Provider>
  );
};

export default CounterContextContainer;
