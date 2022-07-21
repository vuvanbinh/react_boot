
import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService'

export default class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            esss: [
                { id: 1, full_name: 'bing', age: 12, address: 'asdf', email: 'asdfasdf' },
                { id: 2, full_name: 'bing', age: 12, address: 'asdf', email: 'asdfasdf' },
                { id: 3, full_name: 'bing', age: 12, address: 'asdf', email: 'asdfasdf' },
                { id: 4, full_name: 'bing', age: 12, address: 'asdf', email: 'asdfasdf' }
            ],
            employees: []
        }
    }

    componentDidMount() {
        EmployeeService.getEmployee().then((response) => {
            this.setState({ employees: response.data })
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
                                this.state.esss.map((emp, index) =>
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{emp.full_name}</td>
                                        <td>{emp.age}</td>
                                        <td>{emp.address}</td>
                                        <td>{emp.email}</td>
                                        <td>{emp.id}</td>
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
