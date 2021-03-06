import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { completeTodo } from '../actions';
import TodoList from '../components/todo_list';

class TodoListContainer extends Component {
  render() {
    console.log(this.props)
    return(
     <TodoList todos={ this.props.todos }
               completeTodo={ this.props.completeTodo } />
    )
  }
}

const mapStateToProps = (state) => {
  let { todosList, displayFilter} = state.todos;

  return {
    displayFilter: displayFilter,
    todos: todosList.filter(t => !t.completed)
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({completeTodo: completeTodo}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);


