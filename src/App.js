import React, { Component } from 'react';
import AddTodoContainer from './containers/add_todo_container';
import TodoListContainer from './containers/todo_list_container';

export default class App extends Component {
  render() {
    return (
      <div>
        <AddTodoContainer />
        <TodoListContainer />
      </div>
    );
  }
}
