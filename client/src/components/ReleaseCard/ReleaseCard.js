import React, { Component } from 'react';
import './ReleaseCard.css';

class ReleaseCard extends Component {
    render() {
        return (
            <div className="release">
                <p>{this.props.rnumber}</p>
                <p>{this.props.rtype}</p>
                <p>{this.props.status}</p>
                <p>{this.props.branch}</p>
            </div>
        );
    }
}
export default ReleaseCard;
