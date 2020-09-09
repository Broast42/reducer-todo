import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = (props) => {
    // console.log(props)
    return(
        <div className="flexList">
            {props.data.map((x,i) => (
                <ToDoItem 
                key={i} 
                data={x} 
                toggle={props.toggle} 
                comBy={props.comBy} 
                handle={props.handle}
            />
            ))}    
        </div>
    );
}

export default ToDoList; 