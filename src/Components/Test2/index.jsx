import React, { useContext } from "react";
import "./style.css";
import { CountContext } from "../../Context";

const Index = () => {
  const { count, increase, decrease } = useContext(CountContext);
  return (
    <div>
      <h3>Test2 count:{count}</h3>
      <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
      </div>
    </div>
  );
};

export default Index;
