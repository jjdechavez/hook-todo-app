import React, {createContext, useReducer} from 'react';
import {todoReducer} from '../reducer/TodoReducer';
import {todosData} from '../data';

export const TodoContext = createContext();

function TodoContextProvider(props) {
  const initialFormState = {id: null, text: '', completed: null};
  const initialState = {todos: todosData, editing: false, currentTodo: initialFormState}

  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{state, dispatch}}>
      {props.children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider;