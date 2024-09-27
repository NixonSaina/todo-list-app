import React from 'react';
import Todo from './Todo';

function TodoList({ todos, toggleComplete, removeTodo }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
