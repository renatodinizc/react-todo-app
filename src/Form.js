import React, { useState } from 'react';

function Form(props) {
    const [task, setTask] = useState({
        id: 0,
        title: ''
    });

    function handleChange(event) {
        setTask({
            id: props.id,
            title: event.target.value
        });
    }
   
    function handleSubmit(event) {
        event.preventDefault();
        props.createTask(task);
        setTask({
            id: 0,
            title:''
        });
    }

    return (
        <form onSubmit={ handleSubmit }>
        <h3>What needs to be done?</h3>
            <input type='text' value={task.title} onChange={handleChange} placeholder='Add a new task' autoComplete='off' />
            <button type='submit'>Submit new task</button>
        </form>
    );
};

export default Form;