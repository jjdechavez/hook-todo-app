import React, {useState, useContext} from 'react';
import {TodoContext} from '../../context/TodoContext';

function AddTodoForm() {
  const { dispatch } = useContext(TodoContext);
  const initialFormState = {id: null, text: '', completed: false};
  const [todo, setTodo] = useState(initialFormState);

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
        type='text' 
        style={inputStyle} 
        value={todo.text} onChange={(e) => setTodo(e.target.value)}
      />
    </form>
  )
}

export default AddTodoForm;