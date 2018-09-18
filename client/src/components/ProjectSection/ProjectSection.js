import React, { Component } from 'react';
import './ProjectSection.css';
import ReleaseCard from '../ReleaseCard/ReleaseCard';

class ProjectSection extends Component {

    constructor(props){
        super(props);
        this.state={
          rlist: [],
          pid: this.props.key
        }
    };
    componentDidMount() {
        this.callApi()
        .then(rlist => {this.setState({ rlist })})
        .catch(err => console.log(err));
    }

    callApi = async () => {
        const rel = await fetch('/api/releaseList');
        const body = await rel.json();
        if (rel.status !== 200) throw Error(body.message);
        return body;
    };
    render() {
        return (
            <div>
                <h5>{this.props.name}</h5>
                <div className="releases">
                    {
                        this.state.rlist.map((release)=>(
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


