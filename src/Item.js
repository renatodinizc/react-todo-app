import React, { useState } from 'react';

function Item({deleteTask, editTask, id, title}) {
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');

    function handleNewName(event) {
        setNewName(event.target.value);
    };

    function handleEditSubmission(event) {
        event.preventDefault();
        editTask(id, newName);
        setNewName('');
        setEditing(false);
    };


    if (isEditing == false) {
        return (
            <li>
                {title}
                <button onClick={() => deleteTask(id)}>Delete</button>
                <button onClick={() => setEditing(true)}>Edit</button>
            </li>
        );
    } else {
        return (
            <>
                <form onSubmit={handleEditSubmission}>
                    <h4>New title for task</h4>
                    <input type='text' value={newName} onChange={handleNewName} placeholder={title} autoComplete='off' />
                    <button onClick={() => setEditing(false)}>Cancel</button>
                    <button type='submit'>Save</button>
                </form>
            </>
        );
    };
};

export default Item;