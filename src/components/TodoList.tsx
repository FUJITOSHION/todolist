import React from 'react';
import { Todos } from '../Types';

type TodoListProps = {
    todos: Todos[]
    toggleTodo: (id: string, completed: boolean) => void
    deleteTodo: (id: string) => void
}

export const TodoList: React.VFC<TodoListProps> = ({todos, toggleTodo, deleteTodo}: TodoListProps) => {
    const todoList = todos.map((todo) => {
        const label = todo.completed ? "作業中にする" : "完了にする"
        return (
            <li key={todo.id}>
                {todo.title}
                <button onClick={() => toggleTodo(todo.id, todo.completed)}>{label}</button>
                <button onClick={() => deleteTodo(todo.id)}>削除</button>
            </li>

        )
    })
    return(
        <div>
            {todoList}
        </div>
    )
}
