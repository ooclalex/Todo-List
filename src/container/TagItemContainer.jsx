import { connect } from 'react-redux';
import { } from '../action';
import TagItem from "../component/TagItem";

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

const TagItemContainer = connect(null, mapDispatchToProps)(TagItem);

export default TagItemContainer;