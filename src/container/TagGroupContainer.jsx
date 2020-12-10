import {connect} from "react-redux";
import { initTags } from "../action";
import TagGroup from "../component/TagGroup";

const mapStateToProps = (state) => {
    return {
        tagItemList: state.tagItemList
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        initTags: (tags) => dispatch(initTags(tags))
    };
}

const TagItemGroupContainer = connect(mapStateToProps, mapDispatchToProps)(TagGroup);

export default TagItemGroupContainer;