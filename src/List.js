import React, {setState} from 'react';

function List(props) {

    return (
        <>
            {props.tasks.map(task => <li>{task.id}. {task.title}</li>)}
        </>
    );
}

export default List;