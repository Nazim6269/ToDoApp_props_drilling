//external import
import { v4 as uuidv4 } from "uuid";

//internal import
import { useState } from "react";
import NewTodo from "./NewTodo";
import Todos from "./Todos";
import style from "./home.module.css";

//code start
const Home = () => {
  const [todos, setTodos] = useState([]);

  const handleRemoveTodo = (id) => {
    setTodos((prevTodos) => {
      const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
      return filteredTodos;
    });
  };

  const handleAddTodo = (todo) => {
    setTodos((prevTodo) => {
      return [...prevTodo, { id: uuidv4(), ...todo }];
    });
  };

  return (
    <div className={style.container}>
      <h1 style={{ color: "#fff" }}>To Do App</h1>
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
      <h5>Copyright All right reserved by Nazimuddin</h5>
    </div>
  );
};
export default Home;
