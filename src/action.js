import { ADD_TODO_ITEM, DELETE_TODO_ITEM, UPDATE_TODO_ITEM } from "./actionTypes";

export const addTodoItem = (text) => (
    {type: ADD_TODO_ITEM, payload: text}
)

export const updateTodoItem = (id) => (
    {type: UPDATE_TODO_ITEM, payload: id}
)

export const deleteTodoItem = (id) => (
    {type: DELETE_TODO_ITEM, payload: id}
)