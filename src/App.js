import './App.css';
import { useState } from 'react';
import Overview from './components/Overview';
import { nanoid } from 'nanoid';

function App() {
  const [formData, setFormData] = useState({ taskName: ' ', edit: ' ' });
  const [tasks, setTasks] = useState([]);

  function handleChange(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function newTask() {
    setTasks((prevTasks) => {
      return [...prevTasks, { text: formData.taskName, id: nanoid() }];
    });
    setFormData({ taskName: '' });
  }

  function deleteTask(taskId) {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  }

  function confirmEdit(taskId) {
    setTasks((prevTasks) => {
      const newTasks = [];
      for (let i = 0; i < prevTasks.length; i++) {
        const task = prevTasks[i];
        if (task.id === taskId) {
          newTasks.push({ ...task, text: formData.edit });
        } else {
          newTasks.push(task);
        }
      }
      return newTasks;
    });
  }

  const renderTasks = tasks.map((task) => {
    return (
      <Overview
        task={task.text}
        key={task.id}
        id={task.id}
        deleteTask={() => deleteTask(task.id)}
        confirmEdit={() => confirmEdit(task.id)}
        formData={formData}
        handleChange={handleChange}
      />
    );
  });

  return (
    <div className="App">
      <div className="app--tasks-container">{renderTasks}</div>
      <input
        type="text"
        placeholder="Task..."
        onChange={handleChange}
        name="taskName"
        value={formData.taskName}
        className="app--input"
      />
      <button className="app--button" onClick={newTask}>
        Add task
      </button>
    </div>
  );
}

export default App;
