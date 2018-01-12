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
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDone = this.handleDone.bind(this);
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
    axios.post(APIURI, { name: newTodo })
      .then(this.loadTodos())
      .catch(error => console.log(error));
  }

  handleDone(e) {
    let completed = false;
    if (e.target.className.includes('disabled')) {
      completed = true;
    }
    axios.put(`${APIURI}/${e.target.id}`, { completed: !completed })
      .then(this.loadTodos())
      .catch(error => console.log(error));
  }

  handleDelete(e) {
    axios.delete(`${APIURI}/${e.target.id}`)
      .then(this.loadTodos())
      .catch(error => console.log(error));
  }

  render() {
    const todoItems = this.state.todos.map(todo => (
      <TodoItem
        key={todo._id}
        {...todo}
        handleDone={this.handleDone}
        handleDelete={this.handleDelete}
      />
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
