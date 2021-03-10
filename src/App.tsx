import React from 'react';
import './App.css';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import {useTodo}  from './hooks/useTodo';

function App() {
  const {todos, toggleTodo, deleteTodo, addTodo} = useTodo()
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
