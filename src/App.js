import React, {useContext} from 'react';

import TodoList from './components/TodoList';
import TodoContextProvider from './context/TodoContext';
import {TodoContext} from './context/TodoContext';
import AddTodoForm from './components/forms/AddTodoForm';
import EditTodoForm from './components/forms/EditTodoForm';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  // const {state: {editing}} = useContext(TodoContext);
  return (
    <div className="App" style={{overflowX: 'hidden'}}>
      <TodoContextProvider>
        <Navbar />
        <EditTodoForm />
        <AddTodoForm />
        <TodoList />
      </TodoContextProvider>
    </div>
  );
}

export default App;
