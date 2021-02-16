import React, { useContext } from "react";
import { CounterContext } from "../context";
import CustomButton from "./customButton";

const Dashboard = (props) => {
  const { counterValue } = useContext(CounterContext);
  return (
    <div>
      <h1>{counterValue}</h1>
      <CustomButton text="Add" />
      <CustomButton text="Button" />
    </div>
  );
};

export default Dashboard;
