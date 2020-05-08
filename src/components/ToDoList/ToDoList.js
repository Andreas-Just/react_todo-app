import React from 'react';
import PropTypes from 'prop-types';
import { ToDoItem } from '../ToDoItem';
import './ToDoList.scss';

export const ToDoList = ({
  items,
  onToggleTodo,
  onDeleteTodo,
  onEditTodo,
  handleKeyPress,
  setEditedValue,
}) => (
  <ul className="todo-list">
    {items.map(item => (
      <ToDoItem
        key={item.id}
        todo={item}
        onToggle={() => onToggleTodo(item.id)}
        onDelete={() => onDeleteTodo(item.id)}
        onEdit={() => onEditTodo(item.id)}
        handleKeyPress={handleKeyPress}
        setEditedValue={setEditedValue}
      />
    ))}
  </ul>
);

ToDoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggleTodo: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onEditTodo: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  setEditedValue: PropTypes.func.isRequired,
};
