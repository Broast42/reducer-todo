import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from './reducers/reducer';
import Header from './Header';
import ToDoList from './ToDoList';
import './App.css';

function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [input, setInput] = useState("");
  //console.log(state);
  
  const handleChanges = (e) =>{
    setInput(e.target.value);
  };

  const addTodo = () => {
    dispatch({type: "ADD_TODO", payload: input});
    setInput("");
  };

  const toggleTodo = (id) => {
    dispatch({type: "TOGGLE_TODO", payload: id});
    
  }

  const clearCompleted = () => {
    dispatch({type: "CLEAR_TODO"});
  };

  return (
    <div className="App">
      <Header handle={handleChanges} submit={addTodo} clear={clearCompleted} input={input}/>
      <ToDoList data={state} toggle={toggleTodo} />
    </div>
  );
}

export default App;
