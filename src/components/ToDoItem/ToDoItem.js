import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './ToDoItem.scss';

/* eslint-disable jsx-a11y/no-autofocus */
export class ToDoItem extends Component {
  state = { editValue: '' }

  setEditValue = ({ target }) => {
    this.setState({
      editValue: target.value,
    });
  }

  render = () => {
    const {
      todo,
      onToggle,
      onDelete,
      onEdit,
      handleKeyPress,
      setEditedValue,
    } = this.props;
    const { editValue } = this.state;

    return (
      <li className={cn('todo-item', {
        completed: todo.completed,
        editing: todo.isEditable,
      })}
      >
        <div className="view">
          <input
            type="checkbox"
            className="toggle"
            onChange={onToggle}
            checked={todo.completed}
          />

          <label
            className={cn('todo-label', { checked: todo.completed })}
            htmlFor={`todo-${todo.id}`}
            onDoubleClick={onEdit}
          >
            {todo.title}
          </label>

          <button
            type="button"
            className="destroy"
            onClick={onDelete}
          />
        </div>

        {todo.isEditable && (
          <input
            type="text"
            className="edit"
            defaultValue={todo.title}
            autoFocus
            onChange={this.setEditValue}
            onKeyDown={
              event => handleKeyPress(event, todo.id, editValue)
            }
            onBlur={
              event => setEditedValue(event, todo.id, editValue)
            }
          />
        )}
      </li>
    );
  }
}

ToDoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
    isEditable: PropTypes.bool,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  setEditedValue: PropTypes.func.isRequired,
};
