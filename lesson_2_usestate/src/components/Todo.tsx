import React, { useState } from "react";

//Визначення Типу Даних
interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const Todo = () => {
  //Ініціалізація Стану
  //Це ключовий елемент. Ви вказуєте React та TypeScript, що стан todos буде масивом ([]) об'єктів, де кожен об'єкт відповідає інтерфейсу Todo.
  //Початкове значення стану — порожній масив, оскільки спочатку список справ пустий.
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (task: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      task,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <div>
      <h2>Todo List</h2>

      <button onClick={() => addTodo("New Todo")}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task} {todo.completed ? "(Completed)" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
