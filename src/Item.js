import React, { useState } from 'react';

function Item({deleteTask, editTask, id, title}) {
    const [isEditing, setEditing] = useState(false);

    



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
                <form>
                    <h4>New title for task</h4>
                    <input type='text' placeholder={title} autoComplete='off' />
                    <button onClick={() => setEditing(false)}>Cancel</button>
                    <button type='submit'>Save</button>
                </form>
            </>
        );
    };
};

export default Item;