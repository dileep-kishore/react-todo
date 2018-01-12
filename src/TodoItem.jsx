import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

const TodoItem = ({
  _id: key, name, completed, handleDone, handleDelete,
}) => {
  const doneClass = completed ? 'done' : '';
  const checkDoneClass = completed ? 'has-text-disabled' : 'has-text-success';
  return (
    <li className={`box ${doneClass}`}>
      <span
        className="text"
        id={key}
      >
        {name}
      </span>
      <span
        id={key}
        completed={completed}
        className={`icon ${checkDoneClass}`}
        onClick={handleDone}
      >
        <i className="fa fa-check" />
      </span>
      <span
        id={key}
        className="icon has-text-danger"
        onClick={handleDelete}
      >
        <i className="fa fa-times" />
      </span>
    </li>
  );
};

TodoItem.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  handleDone: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default TodoItem;
