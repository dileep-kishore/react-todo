import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TodoForm.css';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    callback: PropTypes.func.isRequired
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = this.state.newTodo;
    this.props.callback(this.state.newTodo)
  }

  render() {
    const { newTodo } = this.state;
    return (
      <section className="section" id="field-section">
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <div className="field has-addons">
              <div className="control has-icons-left is-expanded">
                <input
                  type="text"
                  className="input is-large"
                  id="todoInput"
                  placeholder="Insert your task here..."
                  autoComplete="off"
                  name="newTodo"
                  value={newTodo}
                  onChange={e => this.setState({ [e.target.name]: e.target.value })}
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-list-ul" />
                </span>
              </div>
              <button
                className="button is-large is-primary"
                id="todo-btn"
                type="submit"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

export default TodoForm;
