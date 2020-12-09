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

const updateTodo = (id, item) => {
    return api.put(`/todos/${id}`, {...item, done: !item.done});
}
export {getTodoList, createNewTodo, deleteTodo, updateTodo};