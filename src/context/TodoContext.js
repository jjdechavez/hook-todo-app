import React, {createContext, useState, useReducer} from 'react';
import {todoReducer} from '../reducer/TodoReducer';
import {todosData} from '../data';

export const TodoContext = createContext();

function TodoContextProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, todosData);
  // const [isLoading, setLoading] = useState(true);

  return (
    <TodoContext.Provider value={{todos, dispatch}}>
      {props.children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider;