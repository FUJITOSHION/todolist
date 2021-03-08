import React from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import {useTodo}  from './hooks/useTodo';

function App() {
  const {todos, toggleTodo } = useTodo()
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </div>
  );
}

export default App;
