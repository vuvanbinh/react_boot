import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreateEmployeeComponent extends Component {

    constructor(props) {
        super(props);


        this.state = {
            fullName: '',
            age: '',
            address: '',
            email: '',

        };
    }


    handleChangeValue = (event) => {
        switch (event.target.name) {
            case 'fullName':
                this.setState({ fullName: event.target.value });
                break;
            case 'age':
                this.setState({ age: event.target.value });
                break;
            case 'address':
                this.setState({ address: event.target.value });
                break;
            case 'email':
                this.setState({ email: event.target.value });
                break;
        }

    }

    saveOrUpdateEmployee = () => {
        let employee = {
            full_name: this.state.fullName,
            age: this.state.age,
            address: this.state.address,
            email: this.state.email
        }

        
    }

    render() {
        return (
            <div>
                {/* <h1>asdfasdfasdfds</h1> */}
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="">Full Name:</label>
                                        <input placeholder="Full name" className="form-control" name="fullName"
                                            defaultValue={this.state.fullName} onChange={this.handleChangeValue} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Age:</label>
                                        <input placeholder="Age" className="form-control" name="age" type="number"
                                            defaultValue={this.state.age} onChange={this.handleChangeValue} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Address:</label>
                                        <input placeholder="Address" className="form-control" name="address"
                                            defaultValue={this.state.address} onChange={this.handleChangeValue}  />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Email:</label>
                                        <input placeholder="Email" className="form-control" name="email"
                                            defaultValue={this.state.email} onChange={this.handleChangeValue}  />
                                    </div>

                                    <div style={{ marginTop: '10px' }}>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                        <Link to={`/`}><button className="btn btn-danger" style={{ marginLeft: "10px" }}>Cancel</button></Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;