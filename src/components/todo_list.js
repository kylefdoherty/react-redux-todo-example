import React from 'react';
import Todo from './todo';

const TodoList = (props) => {
  let todos = props.todos.map((todo) => {
    return(
      <Todo key={ todo.id }
            text={ todo.text }
            id={ todo.id }
            completed={ todo.completed }
            completeTodo={ props.completeTodo } />
    )
  })

  return(
    <ul>
      { todos }
    </ul>
  )
}

export default TodoList;
