import React from 'react';

const Header = () => {
    return(
        <header className="header">
            <h1>Things To Do</h1>
            <div>
                <input type="text" name="newitem" placeholder="Add A To Do"/>
                <button>submit</button>
            </div>
            
        </header>
    );
}

export default Header; 