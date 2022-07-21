import axios from 'axios'

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/employee"
const GET_ALL_EMPLOYEE = EMPLOYEE_API_BASE_URL + '/all'

class EmployeeService{
    getEmployee(){
        return axios.get(GET_ALL_EMPLOYEE);
    }
}

export default new EmployeeService();