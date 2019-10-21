import React, {useContext} from 'react';
import {TodoContext} from '../context/TodoContext';

function TodoItem({todo}) {
  const todoItemStyle = {
    background: '#ccc',
    padding: '5px 5px',
    width: 'inherit',
    borderBottom: '1px dotted #fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflowX: 'hidden'
  };
  const deleteBtnStyle ={
    height: '2rem',
    background: 'red',
    borderRadius: '50%',
    cursor: 'pointer'
  }
  const updateBtnStyle ={
    height: '2rem',
    background: 'green',
    borderRadius: '50%',
    cursor: 'pointer'
  }
  const {dispatch} = useContext(TodoContext);
  return (
    <div className='todo-item' style={todoItemStyle}>
      <div style={{display: 'flex'}}>
        <input type='checkbox' onChange={() => dispatch({type: 'TOGGLE_TODO', id: todo.id})} style={{marginRight: '.75rem' }} />
        <p style={{textDecoration: todo.completed ? 'line-through' : ''}}>
          {todo.text}
        </p>
      </div>                
      <div>
        <button 
          style={deleteBtnStyle} 
          onClick={() => dispatch({type: 'REMOVE_TODO', id: todo.id})}
        >
          X
        </button> 
        <button 
          style={updateBtnStyle} 
          onClick={() => dispatch({type: 'EDIT_TODO', todo})}
        >
          Up
        </button>
      </div>
    </div> 
  )
}

export default TodoItem;