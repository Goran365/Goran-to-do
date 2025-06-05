import React, { useState } from "react";
import TodoInput from "./components/ToDoInput";
import TodoList from "./components/ToDoList";
import "./css/App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { text, completed: false }]);
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const resetTasks = () => {
    setTasks([]);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TodoInput onAdd={addTask} />
      <TodoList tasks={tasks} onToggle={toggleComplete} />
      {tasks.length > 0 && (
        <button className="reset-btn" onClick={resetTasks}>
          Reset List
        </button>
      )}
    </div>
  );
};

export default App;
