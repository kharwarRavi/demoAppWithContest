import React, { useContext } from "react";
import { CounterContext } from "../context";

const CustomButton = ({ text }) => {
  const { handleChange } = useContext(CounterContext);
  return (
    <button onClick={() => handleChange(text?.toLowerCase())}>{text}</button>
  );
};

export default CustomButton;
