import style from "./todo.module.css";

const Todo = (props) => {
  const { title, desc } = props.todo;
  const { id } = props;

  const handleClick = (id) => {
    props.onRemoveTodo(id);
  };

  return (
    <article className={style.todo}>
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
    </article>
  );
};
export default Todo;
