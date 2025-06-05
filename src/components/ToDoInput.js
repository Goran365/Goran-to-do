import React, { useState } from "react";
import "../css/ToDoInput.css";

const TodoInput = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return; // ignoriraj prazan unos
    onAdd(text);
    setText("");
  };

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoInput;
