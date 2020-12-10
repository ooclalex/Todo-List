import { combineReducers } from "redux";
import {
  ADD_TAG,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_TODOS,
  UPDATE_TODO_ITEM,
} from "./actionTypes";

const todoItemList = (state = [], action) => {
  // TODO change to switch
  // redux toolkit
  if (action.type === ADD_TODO_ITEM) {
    return [...state, action.payload];
  }
  if (action.type === UPDATE_TODO_ITEM) {
    return state.map((todo) => {
      if (todo.id === action.payload) {
        return {
          ...todo,
          done: !todo.done,
        };
      }
      return todo;
    });
  }
  if (action.type === DELETE_TODO_ITEM) {
    return state.filter((item) => item.id !== action.payload);
  }
  if (action.type === INIT_TODOS) {
    return action.payload;
  }
  if (action.type === ADD_TAG) {
    return state.map((todo) => {
      if (todo.id === action.payload.id) {
        return {
          ...todo,
          tag: [...todo.tag, action.payload.tag],
        };
      }
      return todo;
    });
  }
  return state;
};

export default combineReducers({
  todoItemList,
});
