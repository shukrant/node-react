import React, { Component } from 'react';
import './ProjectSection.css';
import ReleaseCard from '../ReleaseCard/ReleaseCard';

class ProjectSection extends Component {

  render() {
    return (
        <div>
            <h5>{this.props.name}</h5>
            <div className="releases">
                {
                    this.props.rlist.map((release)=>(
                        <ReleaseCard 
                            key={release.release_id} 
                            rnumber={release.release_no} 
                            rtype={release.release_type}
                            status={release.status}
                            branch={release.branch}
                        />
                    ))
                }
            </div>
        </div>
    );
  }
}

export default ProjectSection;


