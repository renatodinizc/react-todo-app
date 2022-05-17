import React from 'react';

function List(props) {

    function handleDeleteTask() {
        const remainingTasks = props.tasks.filter(task => props.id !== task.id);
        props.setTasks(remainingTasks);


    };

    return (
        <li>{props.id} {props.title} <button onClick={handleDeleteTask}>Delete Task</button></li>
    );
}

export default List;