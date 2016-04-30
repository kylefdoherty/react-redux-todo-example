

let nextTodoId = 0

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const completeTodo = (todoId) => {
  return {
    type: 'COMPLETE_TODO',
    todoId: todoId
  }
}
