//external import
import { v4 as uuidv4 } from "uuid";

//internal import
import { useState } from "react";
import CustomButton from "../customButton/CustomButton";
import style from "../home/home.module.css";
import NewTodo from "../newTodo/NewTodo";
import Todos from "../todos/Todos";

//code start
const Home = () => {
  const [todos, setTodos] = useState([]);
  const [visibility, setVisibility] = useState("All");

  //handle remove todo function
  const handleRemoveTodo = (id) => {
    setTodos((prevTodos) => {
      const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
      return filteredTodos;
    });
  };

  //handle Add todo function
  const handleAddTodo = (todo) => {
    setTodos((prevTodo) => {
      return [...prevTodo, { id: uuidv4(), ...todo }];
    });
  };

  //handle onclick funciton
  const handleClick = (value) => {
    setVisibility(value);
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

          {/* button group */}
          <div className={style.btnGroup}>
            <CustomButton text={"All"} handleClick={() => handleClick("All")} />
            <CustomButton
              text={"Completed"}
              handleClick={() => handleClick("Completed")}
            />
            <CustomButton
              text={"Not Completed"}
              handleClick={() => handleClick("Not Completed")}
            />
          </div>
          {/* set visiblity */}
          <div className={style.visible}>
            <h3>Selected Visibility: {visibility}</h3>
          </div>
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
