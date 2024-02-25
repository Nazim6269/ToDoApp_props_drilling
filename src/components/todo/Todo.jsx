import { useState } from "react";
import style from "./todo.module.css";

const Todo = (props) => {
  const { title, desc } = props.todo;
  const { id, onRemoveTodo } = props;
  const [isCompleted, setIsCompleted] = useState(false);

  const handleClick = (id) => {
    onRemoveTodo(id);
  };

  //handleIsCompleted  function
  const handleIsCompleted = () => {
    setIsCompleted(!isCompleted);
    console.log(isCompleted);
  };

  return (
    <article
      className={isCompleted ? style.completed : style.todo}
      value={isCompleted}
      onClick={() => handleIsCompleted()}
    >
      <div>
        <h3>{title}</h3>
      </div>
      <p>{desc}</p>
      <button
        className={style.btn}
        onClick={() => {
          handleClick(id);
        }}
      >
        <i className="fa fa-trash fa-2x "></i>
      </button>
      <p>{new Date().toJSON().slice(0, 10)}</p>
    </article>
  );
};
export default Todo;
