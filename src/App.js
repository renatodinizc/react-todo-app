import React, { useState } from 'react';
import Form from './Form';
import Item from './Item';

function App() {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    if (task.title.trim()) {
      setTasks([...tasks, task]);
    };
  };

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => task.id !== id);
    remainingTasks.map(task => task.id)
    setTasks(remainingTasks);
  };

  function editTask(id) {
    const editedTasks = tasks.map(task => {
      if (task.id == id) {
        return {...task, title: prompt('Insert edition to task')};
      }
      return task;
    });
    setTasks(editedTasks);
  }

  return (
    <>
      <h1>Todo App</h1>
      <Form createTask={createTask} id={tasks.length + 1} />

      <ul>
        {tasks.map((task) => <Item id={task.id} title={task.title} tasks={tasks} editTask={editTask} deleteTask={deleteTask}/>)}
      </ul>

    </>
  );
}

export default App;
