import React, { Component } from 'react';
import './Landing.css';
import {PropTypes} from 'prop-types';
import {Redirect, Link} from 'react-router-dom';
import ProjectSection from '../../components/ProjectSection/ProjectSection';


var project_list = [
    {
        project_id : 'p1',
        project_name : 'Project1'
    },
    {
        project_id : 'p2',
        project_name : 'Project2'
    },
    {
        project_id : 'p3',
        project_name : 'Project3'
    },
]
class Landing extends Component {
    
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Release Management System</h1>
                </header>
                <div className="projects">
                {
                    // project_list.map((project) => {
                    // return(
                        <Link to="/project/p1" >
                           
                        </Link>
                    // )
                    // })
                }
                </div>
            </div>
        );
    }
}
export default Landing;
