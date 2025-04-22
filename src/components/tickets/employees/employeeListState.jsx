import { useEffect, useState } from "react";
import { employeeList } from "../../../services/employeeList.jsx";
import { Employee } from "./Employee.jsx";
import "./employee.css"

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
       return <Employee employee={employee} />;
      })}
    </div>
  );
};
