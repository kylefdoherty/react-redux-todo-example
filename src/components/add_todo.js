import React from 'react';

const AddTodo = (props) => {
  return(
    <form onSubmit={ props.handleSubmit } >
      <input onChange={ props.handleChange }
             value={ props.text }
             type='text'
             name='add-todo'
             placeholder='Add Todo' />
    </form>
  )
}

export default AddTodo;
