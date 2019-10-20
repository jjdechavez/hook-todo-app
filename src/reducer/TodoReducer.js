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
    case 'EDIT_TODO':
      return {
        ...state,
        editing: true,
        currentTodo: {
          id: action.todo.id,
          text: action.todo.text,
          completed: action.todo.completed
        }
      }
    case 'UPDATE_TODO':
      return {
        ...state,
        editing: false,
        todos: state.todos.map(todo => (todo.id === action.editTodo.id ? action.editTodo : todo))
      }
    default:
      return state;
  }
}