import React, {useState, useContext} from 'react';
import {TodoContext} from '../../context/TodoContext';

function AddTodoForm() {
  const { dispatch, state: {currentTodo} } = useContext(TodoContext);
  const [editTodo, setEditTodo] = useState(currentTodo);
  console.log(editTodo, 'getCurrentTodo')

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({type: 'UPDATE_TODO', editTodo:{
      id: editTodo.id,
      text: editTodo.text,
      completed: editTodo.completed
    }});
  };

  const inputStyle = {
    width: '99%',
    margin: '0 auto'
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text' 
        style={inputStyle} 
        value={editTodo.text} 
        onChange={(e) => setEditTodo(e.target.value)}
      />
    </form>
  )
}

export default AddTodoForm;