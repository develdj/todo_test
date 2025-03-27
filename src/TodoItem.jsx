import React from 'react';

const TodoItem = ({ todo, toggleComplete }) => {
  return (
    <div className={`flex items-center justify-between p-2 border-b ${todo.completed ? 'line-through text-gray-500' : ''}`}>
      <span>{todo.text}</span>
      <input type="checkbox" checked={todo.completed} onChange={toggleComplete} className="ml-4"/>
    </div>
  );
};

export default TodoItem;
