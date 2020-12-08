import { connect } from 'react-redux';
import { updateTodoItem, deleteTodoItem } from '../action';
import TodoItem from "../component/TodoItem";

const mapDispatchToProps = (dispatch) => {
    return {
        updateTodoItem: (id) => dispatch(updateTodoItem(id)),
        deleteTodoItem: (id) => dispatch(deleteTodoItem(id))
    };
}

const TodoItemContainer = connect(null, mapDispatchToProps)(TodoItem);

export default TodoItemContainer;