import React, { useState } from 'react';

function Form(props) {
    const [name, setName] = useState('');

    function handleChange(event) {
        setName(event.target.value);
    }
   
    function handleSubmit(event) {
        event.preventDefault();
        props.createTask(name);
        setName('');
    }

    return (
        <form onSubmit={ handleSubmit }>
        <h3>What needs to be done?</h3>
            <input type='text' name='text' value={name} onChange={handleChange} placeholder='Add a new task' autoComplete='off' />
            <button type='submit'>Submit new task</button>
        </form>
    );
};

export default Form;