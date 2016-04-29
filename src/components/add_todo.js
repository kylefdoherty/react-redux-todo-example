import React from 'react';

const AddTodo = (props) => {
  return(
    <input onKeyDown={ props.handleKeyDown }
           type='text'
           name='add-todo'
           placeholder='Add Todo' />
  )
}

export default AddTodo;
