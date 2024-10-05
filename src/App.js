import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Form from "./components/Form";
import Todolist from "./components/Todolist";

function App() {

  const initialState = JSON.parse(localStorage.getItem('tasks')) || [];
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState(initialState);
  const [editTask, setEditTask] = useState(null);

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
},[tasks]);

  return (
    <div className="App">
      <div className="container">
        <div className="to-do-list">
          <Header />
          <div className="form-container">
            <Form input={input} setInput={setInput} tasks={tasks} setTasks={setTasks} editTask={editTask} setEditTask={setEditTask}/>
          </div>
          <Todolist tasks={tasks} setTasks={setTasks}  editTask={editTask} setEditTask={setEditTask}/>
        </div>
      </div>
    </div>
  );
}

export default App;
