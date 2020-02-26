import React from 'react';

const Header = (props) => {
    return(
        <header className="header">
            <h1>Things To Do</h1>
            <div>
                <input type="text" name="newitem" onChange={props.handle} placeholder="Add A To Do"/>
                <button onClick={props.submit}>submit</button>
            </div>
            
        </header>
    );
}

export default Header; 