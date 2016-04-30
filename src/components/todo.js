import React from 'react';

const Todo = (props) => {
  return(
    <li>
      { props.text }
      <input type='checkbox'
             checked={ props.completed }
             onChange={ () => props.completeTodo(props.id) } />
    </li>
  )
}

export default Todo;
