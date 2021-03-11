import React, { useState } from 'react';
import './App.css';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import {useTodo}  from './hooks/useTodo';
import {TodoFilter} from './components/TodoFilter'

function App() {
  const {todos, toggleTodo, deleteTodo, addTodo} = useTodo()

  const [filter, setFilter] = useState<string>('all');

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setFilter(e.target.value)
  }
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoFilter handleFilter={handleFilter} selectedFilter={filter}/>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
