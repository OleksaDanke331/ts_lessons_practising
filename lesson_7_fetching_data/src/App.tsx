import React, { Suspense } from "react";
import FetchTodo from "./components/FetchTodo";
import FetchTodo1 from "./components/FetchTodo1";

const App = () => {
  return (
    <Suspense>
      <FetchTodo1 />
    </Suspense>
  );
};

export default App;
