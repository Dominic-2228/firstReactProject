import { useEffect, useState } from "react";
import { employeeList } from "../../../services/employeeList.jsx";
import { Employee } from "./Employee.jsx";
import "./employee.css"
import { Link } from "react-router-dom";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    employeeList().then((employeeObj) => {
      setEmployees(employeeObj);
    });
  }, []);

  return (
    <div className="employees">
      {employees.map((employee) => {
       return (<Link to={`/employees/${employee.id}`}>
       <Employee employee={employee} key={employee.id} />
       </Link>
       )
      })}
    </div>
  );
};
