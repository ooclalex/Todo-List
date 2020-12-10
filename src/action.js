import {
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  UPDATE_TODO_ITEM,
  INIT_TODOS,
  ADD_TAG,
  ADD_TAG_ITEM,
  INIT_TAGS,
} from "./actionTypes";

export const addTodoItem = (item) => ({ type: ADD_TODO_ITEM, payload: item });

export const updateTodoItem = (id) => ({ type: UPDATE_TODO_ITEM, payload: id });

export const deleteTodoItem = (id) => ({ type: DELETE_TODO_ITEM, payload: id });

export const initTodos = (todos) => ({
  type: INIT_TODOS,
  payload: todos,
});

export const addTag = (id, label) => ({
  type: ADD_TAG,
  payload: { id, label: label },
});

export const addTagItem = (tag) => ({
  type: ADD_TAG_ITEM,
  payload: tag
})

export const initTags = (tags) => ({
  type: INIT_TAGS,
  payload: tags,
});