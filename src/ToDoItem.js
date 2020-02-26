import React from 'react';

const ToDoItem = (props) => {
    return(
        <div>
            <h3>{props.data.item}</h3>    
        </div>
    );
}

export default ToDoItem; 