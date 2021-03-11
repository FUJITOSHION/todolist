import React, { useMemo, useState } from 'react';
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

  const filterTodos = useMemo(() => {
    switch(filter) {
      case 'active': return todos.filter(todo => !todo.completed);
      case 'completed': return todos.filter(todo => todo.completed);
      case 'all': default: return todos;
    }
  }, [todos, filter])
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoFilter handleFilter={handleFilter} selectedFilter={filter}/>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={filterTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
