
import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }

    }

    componentDidMount() {
        EmployeeService.getEmployee().then((res) => {
            console.log(res);
            this.setState({ employees: res.data.data })
        })
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <Link to="/add-employee">
                    <button type="button" className="btn btn-primary">Add new employee</button>
                </Link>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Full Name</th>
                                <th>age</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map((emp, index) =>
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{emp.full_name}</td>
                                        <td>{emp.age}</td>
                                        <td>{emp.address}</td>
                                        <td>{emp.email}</td>
                                        <td>
                                            <Link to={`update/${emp.id}`}>
                                                <button type="button" className="btn btn-secondary" ><FontAwesomeIcon icon={faPen} /></button>
                                            </Link>
                                            <Link to={`update/${emp.id}`}>
                                                <button type="button" className="btn btn-danger ml"><FontAwesomeIcon icon={faTrashCan} /></button>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
