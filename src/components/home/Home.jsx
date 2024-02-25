//external import
import { v4 as uuidv4 } from "uuid";

//internal import
import { useState } from "react";
import style from "../home/home.module.css";
import NewTodo from "../newTodo/NewTodo";
import Todos from "../todos/Todos";

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
      <h1 style={{ color: "#8A98AE", marginBottom: "12px" }}>To Do App</h1>
      {/* sub container */}
      <div>
        {/* New to do */}
        <div className={style.newTodo}>
          <h2 style={{ color: "#8A98AE", margin: "12px 0px" }}>
            Save your To-Dos :{" "}
          </h2>
          <NewTodo onAddTodo={handleAddTodo} />
        </div>
        {/* Saved to dos */}
        <div className={style.savedTodo}>
          <h2 style={{ color: "#8A98AE", margin: "12px 0px" }}>
            Your To-Dos :{" "}
          </h2>
          <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
        </div>
      </div>
      <h5 style={{ color: "#8A98AE", marginTop: "1rem" }}>
        &copy; Copyright All right reserved by Nazimuddin
      </h5>
    </div>
  );
};
export default Home;
