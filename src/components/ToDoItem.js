import React from "react";
import "../css/ToDoItem.css";

const TodoItem = ({ text, completed, onToggle }) => {
  return (
    <div className="todo-item">
      <span className={completed ? "completed" : ""}>{text}</span>
      <button onClick={onToggle}>{completed ? "Undo" : "Done"}</button>
    </div>
  );
};

export default TodoItem;
