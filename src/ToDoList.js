import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = (props) => {
    // console.log(props)
    return(
        <div>
            {props.data.map((x,i) => (
                <ToDoItem key={i} data={x} toggle={props.toggle}/>
            ))}    
        </div>
    );
}

export default ToDoList; 