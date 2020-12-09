import api from './api';

const getTodoList = () => {
    return api.get('/todos');
}

const createNewTodo = (text) => {

}

export {getTodoList, createNewTodo};