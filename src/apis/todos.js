import api from './api';

const getTodoList = () => {
    return api.get('/todos');
}

const createNewTodo = (text) => {
    console.log(text);
    return api.post('/todos', {text});
}

const deleteTodo = (id) => {
    return api.delete(`/todos/${id}`);
}

const updateTodo = (id, item) => {
    return api.put(`/todos/${id}`, {...item, done: !item.done});
}

const updateTodoAddTag = (id, item, newtag, color) => {
    return api.put(`/todos/${id}`, {...item, tag: [...item.tag, {content: newtag, color: color}]});
}

const createNewTag = (content, color) => {
    return api.post('/tag', {content: content, color: color});
}

export {getTodoList, createNewTodo, deleteTodo, updateTodo, updateTodoAddTag, createNewTag};