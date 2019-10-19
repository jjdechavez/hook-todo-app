export const todoReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, {
        id: Math.floor((Math.random() * 100) + 1),
        text: action.todo,
        completed: false
      }];
    case 'TOGGLE_TODO':
      const updateTodo = state.map(todo => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return updateTodo;
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}