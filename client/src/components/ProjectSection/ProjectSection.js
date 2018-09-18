import React, { Component } from 'react';
import './ProjectSection.css';
import ReleaseCard from '../ReleaseCard/ReleaseCard';

class ProjectSection extends Component {

    constructor(props){
        super(props);
        this.state={
          rlist: []
        }
    };
    componentDidMount() {
        this.callApi()
        .then(rlist => {this.setState({ rlist })})
        .catch(err => console.log(err));
    }

    callApi = async () => {
        const rel = await fetch('/project/'+ this.props.match.params.id);
        const body = await rel.json();
        if (rel.status !== 200) throw Error(body.message);
        return body.releases;
    };
    render() {
        return (
            <div>
                <div className="project-header">
                    <h1 >{this.props.match.params.id}</h1>
                </div>
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
                <div className="project-footer">
                    <button className="btn btn-success">New Release</button>
                </div>
            </div>
        );
    }
}


export default ProjectSection;


