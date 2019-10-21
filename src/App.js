import React, {useContext} from 'react';

import TodoList from './components/TodoList';
import {TodoContext} from './context/TodoContext';
import AddTodoForm from './components/forms/AddTodoForm';
import EditTodoForm from './components/forms/EditTodoForm';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const {state: {editing}} = useContext(TodoContext);
  return (
    <div className="App" style={{overflowX: 'hidden'}}>
      <Navbar />
      {editing ? (
        <>
          <EditTodoForm />
        </>
      ) : (
        <>
          <AddTodoForm />
        </>
      )}
      <TodoList />
    </div>
  );
}

export default App;
