import React from "react";
import TodoItem from "./ToDoItem";
import "../css/ToDoList.css";

const TodoList = ({ tasks, onToggle }) => {
  return (
    <div className="todo-list">
      {tasks.length === 0 ? (
        <p className="empty-message">No tasks yet.</p>
      ) : (
        tasks.map((task, index) => (
          <TodoItem
            key={index}
            text={task.text}
            completed={task.completed}
            onToggle={() => onToggle(index)}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
