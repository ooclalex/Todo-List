import { connect } from 'react-redux';
import { updateTodoItem, deleteTodoItem, addTag } from '../action';
import TodoItem from "../component/TodoItem";

const mapStateToProps = (state) => {
    return {
        tagItemList: state.tagItemList
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTodoItem: (id) => dispatch(updateTodoItem(id)),
        deleteTodoItem: (id) => dispatch(deleteTodoItem(id)),
        addTag: (id, tag) => dispatch(addTag(id, tag))
    };
};

const TodoItemContainer = connect(mapStateToProps, mapDispatchToProps)(TodoItem);

export default TodoItemContainer;