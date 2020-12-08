import { connect } from 'react-redux';
import { updateTodoItem } from '../action';
import TodoItem from "../component/TodoItem";

const mapDispatchToProps = (dispatch) => {
    return {
        updateTodoItem: (id) => dispatch(updateTodoItem(id))
    };
}

const TodoItemContainer = connect(null, mapDispatchToProps)(TodoItem);

export default TodoItemContainer;