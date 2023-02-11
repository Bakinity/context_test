import React, { useState } from "react";
import "./style.css";
import { Test1, Test2, Test3 } from "../../Components";
import { CountContext } from "../../Context";

const Index = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <div>
      <CountContext.Provider value={{ count, increase, decrease }}>
        <h1>Test count: {count}</h1>
        <div>
          <button onClick={increase}>Increase</button>
          <button onClick={decrease}>Decrease</button>
        </div>
        <hr />
        <Test1 /> <hr />
        <Test2 /> <hr />
        <Test3 />
      </CountContext.Provider>
    </div>
  );
};

export default Index;
