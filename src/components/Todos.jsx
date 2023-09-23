//internal import
import Todo from "./Todo";
import style from "./todos.module.css";

//code start
const Todos = (props) => {
  return (
    <section className={style.todos}>
      {props.todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          id={todo.id}
          onRemoveTodo={props.onRemoveTodo}
        />
      ))}
    </section>
  );
};
export default Todos;
