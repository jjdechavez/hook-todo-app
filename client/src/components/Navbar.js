import React, {useContext} from 'react';
import { TodoContext } from '../context/TodoContext';

function Navbar() {
  const {state: {todos}} = useContext(TodoContext);
  const navbarStyle = {
    margin: '0',
    padding: '0',
    height: '15vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: '',
    width: '100%',
    background: '#111',
    textAlign: 'center',
    color: '#fff'
  }
  return(
    <div className="navbar" style={navbarStyle}>
      <h1 style={{margin: '0'}}>Todo App</h1>
      <p>Total of your todos is {todos.length}</p>
    </div>
  )
}

export default Navbar;