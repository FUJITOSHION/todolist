// import { title } from 'node:process';
import {useState, useEffect} from 'react'
import { uuid } from 'uuidv4';

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
        const todo = todos.find(todo => todo.id === id);
        if (todo == null){
            throw new Error('null')
        }
        const newTodo = { ...todo, completed: !completed };
        todoService.update(id, newTodo).then(updatedTodo => {
            const newTodos = todos.map(todo =>
                todo.id !== updatedTodo.id ? todo : newTodo
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

    const addTodo = (title: string) => {
        const newTodo: Todos = {
            title: title,
            completed: false,
            id: uuid()
        }
        // const newTodos = [...todos, newTodo]
        // setTodos(newTodos)
        if (title === '') {
            throw new Error('null')
        }
        todoService.add(newTodo).then(addedTodo => {
            setTodos(addedTodo)
        })
    }
    return {todos, toggleTodo, deleteTodo, addTodo}
}
