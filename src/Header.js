import React from 'react';

const Header = (props) => {
    return(
        <header className="header">
            <button onClick={()=> props.clear()} >Clear Completed</button>
            <h1>Things To Do</h1>
            <div>
                <input 
                    type="text" 
                    name="newitem" 
                    onChange={props.handle} 
                    placeholder="Add A To Do" 
                    value={props.input}
                />
                <button onClick={props.submit}>submit</button>
            </div>
            
        </header>
    );
}

export default Header; 