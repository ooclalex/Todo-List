import {combineReducers} from "redux";
import {ADD_TODO_ITEM, DELETE_TODO_ITEM, UPDATE_TODO_ITEM} from "./actionTypes"
import {v4 as uuidv4} from "uuid";

const todoItemList = (state = [], action) => {
    if (action.type === ADD_TODO_ITEM) {
        const item = {
            id: uuidv4(),
            text: action.payload,
            done: false
        }
        return [...state, item];
    }
    if (action.type === UPDATE_TODO_ITEM) {
        // todo use map
        return state.map(todo => {
            if (todo.id === action.payload) {
                return {
                    ...todo,
                    done: !todo.done
                }
            }
            return todo;
        });
        for (let i = 0; i < state.length; i++) {
            if (state[i].id === action.payload) {
                state[i] = {...state[i], done: !state[i].done}
            }
        }
        return [...state];
    }
    if (action.type === DELETE_TODO_ITEM) {
        return state.filter((item) => item.id !== action.payload);
    }
    return state;
}

export default combineReducers({
    todoItemList
});