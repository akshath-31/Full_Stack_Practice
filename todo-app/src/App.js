import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>To-Do List</h1>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task"
          style={{ padding: "5px", marginRight: "5px" }}
        />
        <button onClick={addTask} style={{ padding: "5px 10px" }}>
          Add
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{ margin: "10px 0", display: "flex", alignItems: "center" }}
          >
            <span
              onClick={() => toggleTask(index)}
              style={{
                cursor: "pointer",
                marginRight: "10px",
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "gray" : "black",
                flexGrow: 1,
              }}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(index)}
              style={{ padding: "2px 5px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
