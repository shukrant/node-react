import React, { Component } from "react";
import "./ReleaseForm.css";
import axios from 'axios';

class ReleaseForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            description: "",
            releaseType: "",
            branches: [{
                key: 1,
                name : 'master'
              },
              {
                key: 2,
                name : 'master1'
              },
              {
                key: 3,
                name : 'master2'
              }],
            priority: "minor",
            branchName : 'master'
        }
    };
        
    
  
    componentDidMount() {
        this.callApi()
        .then(branches => {this.setState({ branches })})
        .catch(err => console.log(err));
    }

    /* fetching branch lists from server */
    callApi = async () => {
        const list = await fetch('api/project_list/'+ this.props.pid);
        const body = await list.json();
        if (list.status !== 200) throw Error(body.message);
        return body.branches;
    };

    /* on description change function */
    onDescriptionChange = e => {
        const description = e.target.value;
        this.setState({ description: description });
    };

    /* on form submit button click */
    onSubmitButtonClick = (e) => {
        e.preventDefault();
        axios.post('/api/submitform', {
            branchName: this.state.branchName,
            email: this.props.actorEmail,
            pid: this.props.pid,
            rpriority: this.state.priority,
            description: this.state.description
          })
        .then(response => {
          console.log(response, 'Form successfully submitted!');
        })
        .catch(err => {
          console.log(err, 'Form submit failure, try again');
        });
    }

    /* on branch change function */
    setBranch = e => {
        this.setState({ branchName: e.target.value });
    };

    /* on priority change function */
    setProirity = e => {
        this.setState({ priority: e.target.value });
    };

  render() {
    const branchOptions = this.state.branches.map((branch,index) => (
        <option key={index} value={branch.name}> {branch.name} </option>
    ));
    return (
        <div className="col-12 container" id="form-container" style={{ width: 500 }}>
        <form className="well form-horizontal">
            <fieldset>
                <legend>Request Release</legend>

                <div className="form-group">
                    <label className="control-label">Branch Name:</label>
                    <div className="selectContainer">
                        <div className="input-group">
                        <div className="input-group-prepend">
                            <label className="input-group-text">
                            <i className="fa fa-list" />
                            </label>
                        </div>

                        <select className="form-control selectpicker" onChange={this.setBranch}>
                            {branchOptions}
                        </select>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label className="control-label">Actor:</label>
                    <div className="selectContainer">
                        <div className="input-group">
                        <div className="input-group-prepend">
                            <label className="input-group-text">
                            <i className="fa fa-user" />
                            </label>
                        </div>

                        <input
                            className="form-control selectpicker"
                            type="text"
                            value={this.props.actorEmail}
                            name="actor"
                            readOnly
                        />
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label className="control-label">Project Id:</label>
                    <div className="selectContainer">
                        <div className="input-group">
                        <div className="input-group-prepend">
                            <label className="input-group-text">
                            Project Id
                            </label>
                        </div>

                        <input
                            className="form-control selectpicker"
                            type="text"
                            value={this.props.pid}
                            name="projectId"
                            readOnly
                        />
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label className="control-label">Release priority:</label>
                    <div className="selectContainer">
                        <div className="input-group">
                        <div className="input-group-prepend">
                            <label className="input-group-text">
                            Options
                            </label>
                        </div>
                        <select className="form-control selectpicker" onChange={this.setProirity}>
                            <option value="minor"> Minor </option>
                            <option value="major"> Major </option>
                            <option value="critical"> Critical</option>
                        </select>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label className="control-label">Project Description:</label>
                    <div className="selectContainer">
                        <div className="input-group">
                        <div className="input-group-prepend">
                            <label className="input-group-text">
                            <i className="fa fa-pencil" />
                            </label>
                        </div>

                        <textarea
                            className="form-control"
                            type="text"
                            value={this.state.description}
                            name="description"
                            onChange={this.onDescriptionChange}
                            placeholder="Project Description"
                        />
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label className="control-label" />
                    <div className="">
                        <button type="submit" className="btn btn-warning" onClick={this.onSubmitButtonClick}>Submit <span className="fa fa-send" />
                        </button>
                    </div>
                </div>
            </fieldset>
        </form>
      </div>
    );
  }
}

export default ReleaseForm;