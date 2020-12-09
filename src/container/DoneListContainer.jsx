import {connect} from "react-redux";
import DoneList from "../component/DoneList";

const mapStateToProps = (state) => {
    return {
        doneList: state.todoItemList.filter((item) => item.done)
    };
}

const DoneListContainer = connect(mapStateToProps)(DoneList);

export default DoneListContainer;