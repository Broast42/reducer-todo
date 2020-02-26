import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = (props) => {
    
    return(
        <div>
            {props.data.map((x,i) => (
                <ToDoItem key={i} data={x} />
            ))}    
        </div>
    );
}

export default ToDoList; 