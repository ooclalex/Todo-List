import {combineReducers} from "redux";
import {ADD_TODO_ITEM, UPDATE_TODO_ITEM} from "./actionTypes"
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
        for (let i = 0; i < state.length; i++) {
            if (state[i].id === action.payload) {
                state[i].status = !state[i].status;
            }
        }
    }
    return state;
}

export default combineReducers({
    todoItemList
});