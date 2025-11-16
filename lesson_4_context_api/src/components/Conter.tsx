import React, { type FC } from "react";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Conter: FC = () => {
  const { count, increment, decrement } = useContext(MyContext);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default Conter;
