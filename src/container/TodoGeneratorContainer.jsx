import {connect} from "react-redux";
import { addTodoItem } from "../action";
import TodoGenerator from "../component/TodoGenerator";

const mapDispatchToProps = (dispatch) => {
    return {
        addTodoItem: (text) => dispatch(addTodoItem(text))
    };
}

const TodoGeneratorContainer = connect(null, mapDispatchToProps)(TodoGenerator);

export default TodoGeneratorContainer;