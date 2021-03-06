import axios from "axios";
import { Todos } from '../Types';

const baesUrl = 'http://localhost:3001/todos';

const getAll = async () => {
    const response = await axios.get(baesUrl)
    return response.data
}

const update = async (id: string, newTodo: Todos) => {
    const response = await axios.put(`${baesUrl}/${id}`, newTodo)
    return response.data
}

const _delete = async (id: string) => {
    await axios.delete(`${baesUrl}/${id}`);
    return id
}

const add = async (newTodo: Todos) =>{
    const response = await axios.post(baesUrl, newTodo)
    return response.data
}

export default {getAll, update, delete: _delete, add};
