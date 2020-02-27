import React from 'react';

const ToDoItem = (props) => {
    return(
        <div className={`${props.data.completed ? "complete": ""}`} onClick={() => props.toggle(props.data.id)}>
            <h3>{props.data.item}</h3>    
        </div>
    );
}

export default ToDoItem; 