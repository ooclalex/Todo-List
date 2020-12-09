import { connect } from 'react-redux';
import { updateTodoItem, deleteTodoItem, addTag } from '../action';
import TodoItem from "../component/TodoItem";

const mapDispatchToProps = (dispatch) => {
    return {
        updateTodoItem: (id) => dispatch(updateTodoItem(id)),
        deleteTodoItem: (id) => dispatch(deleteTodoItem(id)),
        addTag: (id, tag) => dispatch(addTag(id, tag))
    };
};

const TodoItemContainer = connect(null, mapDispatchToProps)(TodoItem);

export default TodoItemContainer;