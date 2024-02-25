//internal import
import { useState } from "react";
import style from "./newtodo.module.css";
console.log(style);

//code start
const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;

  //handle input change
  const handleChange = (event) => {
    const name = event.target.name;
    setTodo((oldtodo) => {
      return { ...oldtodo, [name]: event.target.value };
    });
  };

  //handle submit change
  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim() !== "" && desc.trim() !== "") {
      props.onAddTodo(todo);
      setTodo({ title: "", desc: "" });
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style["form-field"]}>
        <label htmlFor="title" className={style.caption}>
          Title:{" "}
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleChange}
        />
      </div>
      <div className={style["form-field"]}>
        <label htmlFor="desc" className={style.desc}>
          Description:{" "}
        </label>
        <textarea
          type="text"
          name="desc"
          id="desc"
          value={desc}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className={style.btn}>
        Add To Do
      </button>
    </form>
  );
};
export default NewTodo;
