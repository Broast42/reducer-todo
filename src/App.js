import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from './reducers/reducer';
import Header from './Header';
import ToDoList from './ToDoList';
import './App.css';
//import Moment from 'react-moment';


function App() {

  

  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [input, setInput] = useState("");
  const [completBy, setCompleteBy] = useState("");
  //console.log(state);
  
  const handleChanges = (e) =>{
    setInput(e.target.value);
  };

  const handleComBy = (e) =>{
    setCompleteBy(e.target.value);
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

  const addCompleteBy = (id) => {
    dispatch({type: "COMPLETE_BY", payload: {itemId: id, comBy: completBy} });
  }

  return (
    <div className="App">
      <Header handle={handleChanges} submit={addTodo} clear={clearCompleted} input={input}/>
      <ToDoList data={state} toggle={toggleTodo} comBy={addCompleteBy} handle={handleComBy} />  
    </div>
  );
}

export default App;
