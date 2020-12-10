import { combineReducers } from "redux";
import {
  ADD_TAG,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_TODOS,
  UPDATE_TODO_ITEM,
  ADD_TAG_ITEM,
  INIT_TAGS,
} from "./actionTypes";

const todoItemList = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO_ITEM:
      return [...state, action.payload];
    case UPDATE_TODO_ITEM:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    case DELETE_TODO_ITEM:
      return state.filter((item) => item.id !== action.payload);
    case INIT_TODOS:
      return action.payload;
    case ADD_TAG:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            tag: [...todo.tag, action.payload.tag],
          };
        }
        return todo;
      });
    default:
      return state;
  }
};

const tagItemList = (state = [], action) => {
  switch (action.type) {
    case ADD_TAG_ITEM:
      return [...state, action.payload];
    case INIT_TAGS:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  todoItemList,
  tagItemList,
});
