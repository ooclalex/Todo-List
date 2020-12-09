import React, { Component } from 'react';

class DoneList extends Component {
    render() {
        const {doneList} = this.props;
        return (
            <div>
                <ul>
                {doneList.map((doneItem) => (
                    <li><span>{doneItem.text}</span></li>
                ))}
                </ul>
            </div>
        );
    }
}

export default DoneList;