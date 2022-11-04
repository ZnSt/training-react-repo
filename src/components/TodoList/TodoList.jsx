import "./TodoList.css";
export const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <>
      <h2>Состояние компонента</h2>
      <div>Общее количество: {todos.length}</div>
      <div>Количетсво выполнеых: </div>
      <ul className="TodoList">
        {todos.map(({ id, text, completed }) => (
          <li key={id} className="TodoList__item">
            <p className="TodoList__text">{text}</p>
            <button onClick={() => onDeleteTodo(id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </>
  );
};
