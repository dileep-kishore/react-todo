import React, { Component } from 'react';
import axios from 'axios';
import './TodoList.css';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const APIURI = 'api/todos';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.handleNewTodo = this.handleNewTodo.bind(this);
    this.loadTodos = this.loadTodos.bind(this);
  }

  componentDidMount() {
    this.loadTodos();
  }

  loadTodos() {
    axios.get(APIURI)
      .then(todos => this.setState({ todos: todos.data }))
      .catch(error => console.log(error));
  }

  handleNewTodo(newTodo) {
    // TODO: newTodo must be an object with _id, name and completed
    const todos = [...this.state.todos, newTodo];
    this.setState({ todos });
  }

  render() {
    const todoItems = this.state.todos.map(todo => (
      <TodoItem key={todo._id} {...todo} />
    ));
    return [
      <TodoForm callback={this.handleNewTodo} />,
      <section className="section" id="list-section">
        <div className="container">
          <ul className="list">
            {todoItems}
          </ul>
        </div>
      </section>,
    ];
  }
}

export default TodoList;
