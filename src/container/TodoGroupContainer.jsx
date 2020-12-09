import {connect} from "react-redux";
import { initTodos } from "../action";
import TodoGroup from "../component/TodoGroup";

const mapStateToProps = (state) => {
    return {
        todoItemList: state.todoItemList
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        initTodos: (todos) => dispatch(initTodos(todos))
    };
}

const TodoItemGroupContainer = connect(mapStateToProps, mapDispatchToProps)(TodoGroup);

export default TodoItemGroupContainer;