import React from 'react';

import TodoList from './components/TodoList';
import TodoContextProvider from './context/TodoContext';
import './App.css';
import TodoForm from './components/TodoForm';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App" style={{overflowX: 'hidden'}}>
      <TodoContextProvider>
        <Navbar />
        <TodoForm />
        <TodoList />
      </TodoContextProvider>
    </div>
  );
}

export default App;
