import React from 'react';

function Todo({ todo, index, toggleComplete, removeTodo }) {
  return (
    <div style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
      {todo.text}
      <button onClick={() => toggleComplete(index)}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => removeTodo(index)}>Remove</button>
    </div>
  );
}

export default Todo;
