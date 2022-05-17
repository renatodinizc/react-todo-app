import React, { useState } from 'react';
import Form from './Form';
import List from './List';

function App() {
  const [tasks, setTasks] = useState([]);

  function createTask(name) {
    if (name.trim()) {
      setTasks([...tasks, name]);
    };
  }

  return (
    <>
      <h1>Todo App</h1>
      <Form createTask={createTask}/>

      <ul>
        <List tasks={tasks} />
      </ul>

    </>
  );
}

export default App;
