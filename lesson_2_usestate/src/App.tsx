import { useState } from "react";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import Todo from "./components/Todo";

const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>

      <UserProfile />
      <Todo />
    </div>
  );
};

export default App;
