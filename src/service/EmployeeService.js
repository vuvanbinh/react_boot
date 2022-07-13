import axios from 'axios'

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/employee"

class EmployeeService{
    getEmployee(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
}

export default new EmployeeService();