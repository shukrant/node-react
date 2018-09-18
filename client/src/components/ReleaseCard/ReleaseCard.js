import React, { Component } from 'react';
import './ReleaseCard.css';

class ReleaseCard extends Component {
    
    colorClass = "release";
    
    render() {

        if(this.props.status === 'APPROVED'){
            this.colorClass += ' release-approved'
        }
        else if(this.props.status === 'REJECTED'){
            this.colorClass += ' release-rejected'
        }
        else if(this.props.status === 'PENDING'){
            this.colorClass += ' release-pending'
        }
        else if(this.props.status === 'RELEASED'){
            this.colorClass += ' release-released'
        }


        const status = this.props.status;
        return (
            <div className={this.colorClass}>
                <div className="release_div">
                    <div className="release_field">
                        <p>Release Number:</p>
                        <p>Release Type:</p>
                        <p>Release Status:</p>
                        <p>Release Branch:</p>
                    </div>
                    &nbsp;&nbsp;
                    <div className="release_field_input">
                        <p>{this.props.rnumber}</p>
                        <p>{this.props.rtype}</p>
                        <p>{this.props.status}</p>
                        <p>{this.props.branch}</p>
                    </div>
                </div>
                {
                    status ==='PENDING' ? 
                    (<div className="release_buttons">
                        <button className="btn btn-success">Approve</button>
                        <button className="btn btn-danger">Reject</button>
                    </div>) : null
                }
            </div>
        );
    }
}
export default ReleaseCard;