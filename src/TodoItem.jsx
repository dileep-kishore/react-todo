import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

const TodoItem = ({ name, completed }) => {
  const doneClass = completed ? 'done' : '';
  const checkDoneClass = completed ? 'has-text-disabled' : 'has-text-success'
  return (
    <li className={`box ${doneClass}`}>
      <span className="text"> {name} </span>
      <span className={`icon ${checkDoneClass}`}><i className="fa fa-check" /></span>
      <span className="icon has-text-danger"><i className="fa fa-times" /></span>
    </li>
  );
};

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default TodoItem;
