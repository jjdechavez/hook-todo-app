import React from 'react';

import TodoList from './components/TodoList';
import TodoContextProvider, {TodoContext} from './context/TodoContext';
import AddTodoForm from './components/forms/AddTodoForm';
import EditTodoForm from './components/forms/EditTodoForm';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App" style={{overflowX: 'hidden'}}>
      <TodoContextProvider>
        <Navbar />
        <AddTodoForm />
        <EditTodoForm />
        <TodoList />
      </TodoContextProvider>
    </div>
  );
}

export default App;
