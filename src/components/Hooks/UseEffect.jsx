//import React from 'react'

import { useEffect, useState } from "react";

const UseEffect = () => {
  const loadingMsg = "todo is loading";

  const [todos, setTodos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setTodos(data);
          setIsLoading(false);
        });
    }, 2000);
  }, []);

  const todosElement =
    todos &&
    todos.map((todo) => {
      return (
        <p
          style={{
            background: "white",
            color: "black",
            padding: "2rem 1rem",
            textTransform: "capitalize",
          }}
          key={todo.id}
        >
          {todo.title}
        </p>
      );
    });

  return (
    <div>
      <h2>To Do App</h2>
      {isLoading && loadingMsg}
      {todosElement}
    </div>
  );
};

export default UseEffect;
