import { ADD_TODO_ITEM } from "./actionTypes";

export const addTodoItem = (message) => (
    {type: ADD_TODO_ITEM, payload: message}
)
