import React, {useState, useContext} from 'react';
import {TodoContext} from '../context/TodoContext';

function TodoForm() {
  const { dispatch } = useContext(TodoContext);
  const [todo, setTodo] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({type: 'ADD_TODO', todo});
    setTodo('');
  }
  const inputStyle = {
    width: '99%',
    margin: '0 auto'
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
        style={inputStyle} 
        type='text' 
        value={todo} onChange={(e) => setTodo(e.target.value)}
      />
    </form>
  )
}

export default TodoForm;