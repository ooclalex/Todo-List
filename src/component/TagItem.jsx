import { Tag } from 'antd';
import React, { Component } from 'react';

class Label extends Component {
    render() {
        return (
            <div>
                <Tag color={this.props.tagItem.color}>{this.props.tagItem.content}</Tag>
            </div>
        );
    }
}

export default Label;