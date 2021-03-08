import {useState, useEffect} from 'react'

import todoService from '../servicees/todos'
import { Todos } from '../Types';

export const useTodo = () => {
    const [todos,setTodos] = useState<Todos[]>([]);

    useEffect(() => {
        todoService.getAll().then(todos =>{
            setTodos(todos)
        })
    }, [])

    const toggleTodo = (id: string, completed: boolean) => {
        console.log(id)
        const newTodo: Todos = todos.find(todo=> todo.id === id ? {...todo, completed: !completed} : todo)
        todoService.update(id, newTodo).then(updatedTodo => {
            const newTodos = todos.map(todo =>
                todo.id !== updatedTodo.id ? todo : newTodos
            );
            setTodos(newTodos)
        })
    }

    const deleteTodo = (id: string) => {
        todoService.delete(id).then(deleteId => {
            const newTodos = todos.filter((todo) => (todo.id !== id))
            setTodos(newTodos)
        })
    }
    return {todos, toggleTodo, deleteTodo}
}
