import {connect} from "react-redux";
import { addTagItem } from "../action";
import TagGenerator from "../component/TagGenerator";

const mapDispatchToProps = (dispatch) => {
    return {
        addTagItem: (content, color) => dispatch(addTagItem(content, color))
    };
}

const TagGeneratorContainer = connect(null, mapDispatchToProps)(TagGenerator);

export default TagGeneratorContainer;