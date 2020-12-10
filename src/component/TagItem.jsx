import { Tag } from 'antd';
import React, { Component } from 'react';

class Label extends Component {
    render() {
        return (
            <div>
                <Tag color={this.props.color}>{this.props.content}</Tag>
            </div>
        );
    }
}

export default Label;