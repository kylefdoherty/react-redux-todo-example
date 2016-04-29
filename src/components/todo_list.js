import React from 'react';
import Todo from './todo';

const TodoList = (props) => {
  let todos = props.todos.map((todo) => {
    return(
      <Todo key={ todo.id }
            text={ todo.text }
            completed={ todo.completed } />
    )
  })

  return(
    <ul>
      { todos }
    </ul>
  )
}

export default TodoList;
