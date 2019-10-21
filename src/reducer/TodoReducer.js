export const todoReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, {
          id: Math.floor((Math.random() * 100) + 1),
          text: action.todo,
          completed: false
        }]
      };
    case 'TOGGLE_TODO':
      const completeTodo = state.todos.map(todo => {
        if (todo.id === action.id) { 
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        ...state,
        todos: completeTodo
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      }
    case 'SET_TODO':
      const current = {
        id: action.todo.id,
        text: action.todo.text, 
        completed: action.todo.completed
      }

      return {
        ...state,
        editing: true,
        currentTodo: current,
      }
    case 'UPDATE_TODO':
      const updateTodo = state.todos.map(todo => {
        if (todo.id === action.editTodo.id) {
          todo.text = action.editTodo.text;
        }
        return todo;
      });

      return {
        ...state,
        editing: false,
        todos: updateTodo
      }
    default:
      return state;
  }
}