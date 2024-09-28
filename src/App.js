import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css'; // Optional: For styling

function App() {
  // Retrieve tasks from localStorage if available, or initialize as an empty array
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todoTasks");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Effect to save todos to localStorage whenever the todos state changes
  useEffect(() => {
    localStorage.setItem("todoTasks", JSON.stringify(todos));
  }, [todos]);

  // Function to add a new todo item
  const addTodo = (text) => {
    const newTodos = [...todos, { text, completed: false }];
    setTodos(newTodos);
  };

  // Function to toggle the completed status of a todo item
  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  // Function to remove a todo item
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
