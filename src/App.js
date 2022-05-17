import React, { useState } from 'react';
import Form from './Form';
import List from './List';

function App() {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    if (task.title.trim()) {
      setTasks([...tasks, task]);
    };
  }

  return (
    <>
      <h1>Todo App</h1>
      <Form createTask={createTask} id={tasks.length + 1} />

      <ul>
        {tasks.map((task) => <List id={task.id} title={task.title} tasks={tasks} setTasks={setTasks}/>)}
      </ul>

    </>
  );
}

export default App;
