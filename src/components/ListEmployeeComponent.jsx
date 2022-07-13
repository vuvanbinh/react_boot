
import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService'

export default class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: [

            ]
        }
    }

    componentDidMount() {
        EmployeeService.getEmployee().then((response) => {
            this.setState({ employees: response.data.content })
        })
    }


    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>age</th>
                                <th>Address</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    em =>
                                        <tr key={em.id}>
                                            <td>{em.fullName}</td>
                                            <td>{em.email}</td>
                                            <td>{em.age}</td>
                                            <td>{em.address}</td>
                                            <td>
                                                <button type="button" class="btn btn-primary">Update</button>
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
