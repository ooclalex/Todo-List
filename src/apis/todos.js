import api from './api';

const getTodoList = () => {
    return api.get('/todos');
}

const createNewTodo = (text) => {
    return api.post('/todos', {text});
}

export {getTodoList, createNewTodo};