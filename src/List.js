import React from 'react';

function List(props) {

    return (
        <>
            {props.tasks.map(task => <li>{task.id}. {task.title} <button>Delete task</button> </li>)}
        </>
    );
}

export default List;