import {connect} from "react-redux";
import { addTodoItem } from "../action";
import TodoGenerator from "../component/TodoGenerator";

const mapDispatchToProps = (dispatch) => {
    return {
        addTodoItem: (message) => dispatch(addTodoItem(message))
    };
}

const TodoGeneratorContainer = connect(null, mapDispatchToProps)(TodoGenerator);

export default TodoGeneratorContainer;