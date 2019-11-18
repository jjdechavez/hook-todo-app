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
      text: editTodo.text
    }});
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setEditTodo({ ...editTodo, [name]: value})
  }

  const inputStyle = {
    width: '99%',
    margin: '0 auto'
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text' 
        name='text'
        style={inputStyle} 
        value={editTodo.text} 
        onChange={handleChange}
      />
    </form>
  )
}

export default AddTodoForm;