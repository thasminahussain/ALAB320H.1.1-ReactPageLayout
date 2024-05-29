import EmployeeListItem from "./EmployeeListItem";
import { employee } from "../data/employee";

function EmployeeList() {
    return (
        <div>
        <EmployeeListItem employee={employee[0]}/>
        <EmployeeListItem employee={employee[1]}/>
        <EmployeeListItem employee={employee[2]}/>
        <EmployeeListItem employee={employee[3]}/>
        <EmployeeListItem employee={employee[4]}/>
        <EmployeeListItem employee={employee[5]}/>
     
        </div>
    )
}

export default EmployeeList;




