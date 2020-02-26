import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from './reducers/reducer';
import Header from './Header';
import ToDoList from './ToDoList';
import './App.css';

function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [input, setInput] = useState("");
  console.log(input)
  
  const handleChanges = (e) =>{
    setInput(e.target.value);
  };

  const addTodo = e => {
    dispatch({type: "ADD_TODO", payload: input});
  };

  return (
    <div className="App">
      <Header handle={handleChanges} submit={addTodo}/>
      <ToDoList data={state}/>
    </div>
  );
}

export default App;
