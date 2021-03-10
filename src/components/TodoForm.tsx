import React, { useState } from 'react';

type TodoFormProps = {
    addTodo: (title: string) => void
}


export const TodoForm: React.VFC<TodoFormProps> = ({addTodo}:TodoFormProps) => {
    const [value, setValue] = useState<string>('')
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        addTodo(value)
        setValue('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={value} onChange={handleInput} />
            <button type='submit'>追加</button>
        </form>
    )
}
