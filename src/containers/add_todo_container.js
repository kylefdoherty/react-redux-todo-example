import React, { Component } from 'react';
import { connect } from 'react-redux'
import AddTodoForm from '../components/add_todo';
import { addTodo } from '../actions';
import { bindActionCreators } from 'redux';

class AddTodoContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoText: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      todoText: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state.todoText);

    this.setState({
      todoText: ''
    });
  }

  render() {
    return(
     <AddTodoForm handleSubmit={ this.handleSubmit }
                  handleChange={ this.handleChange }
                  text={ this.state.todoText } />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addTodo: addTodo }, dispatch)
}

export default connect(null, mapDispatchToProps)(AddTodoContainer);

