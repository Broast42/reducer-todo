import React from 'react';
import { initalState, todoReducer } from './reducers/reducer';
import Header from './Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
