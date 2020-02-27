import React from 'react';
import Moment from 'react-moment';

const ToDoItem = (props) => {
    
    
    return(
        <div className={`${props.data.completed ? "complete itemCard": "itemCard"}`} >
            <h3 onClick={() => props.toggle(props.data.id)}>{props.data.item}</h3>
            {props.data.completed === true ? "" : 
            
            props.data.completeBy === "" ? 
                <div className="flexItemForm">
                    <input type="date" onChange={props.handle}/>
                    <button onClick={()=>props.comBy(props.data.id)} >
                        Enter Complete By Date
                    </button> 
                </div>:
                <div className="dateMargin"> 
                    <h4>Complete by: </h4>
                    <h4><Moment format="MMMM DD YYYY">{props.data.completeBy}</Moment></h4>
                </div>
            } 

            {props.data.completeOn === "" ? "" :
                <div className="dateMargin">
                    <h4>Completed On:</h4>
                    <h4><Moment format="MMMM DD YYYY">{props.data.completeOn}</Moment></h4>
                </div>
            }   
        </div>
    );
}

export default ToDoItem; 