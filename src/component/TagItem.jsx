import { Tag } from 'antd';
import React, { Component } from 'react';

class TagItem extends Component {
    render() {
        return (
            <div>
                {<Tag color={this.props.tagItem.color}>{this.props.tagItem.content}</Tag>}
            </div>
        );
    }
}

export default TagItem;