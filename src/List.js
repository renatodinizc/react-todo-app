import React, {setState} from 'react';

function List(props) {

    return (
        <>
            {props.tasks.map(task => <li>{task}</li>)}
        </>
    );
}

export default List;