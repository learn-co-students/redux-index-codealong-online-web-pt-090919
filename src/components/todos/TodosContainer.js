import React, {Component} form 'react';
import {connect} from 'react-redux';
import Todo from './Todo'

class TodosContainer extends Component {
  
  renderTodos = () => {
    // mapping over the todos received from Redux
    this.props.todos.map((todo, id) => <Todo key={id} text={todo}/>)
  }
  
  render(){
    return (
      <div>
      {this.renderTodos()}
      </div>
      )
  }
}

const mapStateToProps = state => {
  return {todos: state.todos
}

export default connect(mapStateToProps)(TodosContainer);