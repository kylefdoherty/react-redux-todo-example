const DefaultState = {
  displayFilter: 'ALL_TODOS',
  todosList: [
    {
      text: 'Feed dog',
      completed: false,
      id: 1
    },
    {
      text: 'Walk dog',
      completed: false,
      id: 2
    }
  ]
}

const CompleteTodo = (todos, todoId) => {
  return todos.map((todo) => {
    if(todo.id === todoId) {
      todo.completed = true
    }
    return todo
  })
}

const Todos = (state = DefaultState, action = {}) => {
  switch (action.type) {
    case 'ADD_TODO':
     let nextId = state.length + 1

     return [
      ...state,
      {
        text: action.text,
        id: nextId,
        completed: false
      }
     ]
    case 'COMPLETE_TODO':
      return CompleteTodo(state, action.todoId)
    default:
      return state
  }
}

export default Todos
