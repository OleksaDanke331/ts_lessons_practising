import React, { use } from "react";

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return res.json();
};

const FetchTodo1 = () => {
  const data = use(fetchData());

  return <div>{data.title}</div>;
};

export default FetchTodo1;
