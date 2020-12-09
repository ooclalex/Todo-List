import api from './api';

const getTodoList = () => {
    return api.get('/todos');
}

const createNewTodo = (text) => {
    return api.post('/todos', {text});
}

const deleteTodo = (id) => {
    return api.delete(`/todos/${id}`);
}

export {getTodoList, createNewTodo, deleteTodo};