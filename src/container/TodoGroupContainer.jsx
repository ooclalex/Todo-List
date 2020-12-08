import {connect} from "react-redux";
import TodoGroup from "../component/TodoGroup";

const mapStateToProps = (state) => {
    return {
        todoItemList: state.todoItemList
    };
}

const TodoItemGroupContainer = connect(mapStateToProps)(TodoGroup);

export default TodoItemGroupContainer;