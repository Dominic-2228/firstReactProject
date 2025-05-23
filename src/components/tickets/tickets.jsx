import { useEffect, useState } from "react";
import { employeeService } from "../../services/employeeServices.jsx";

export const Ticket = ({ticket}) => {
const [employees, setEmployees] = useState([])
const [assignedEmployee, setAssignedEmployee] = useState({})

useEffect(() => {
  employeeService().then((res) => {
    setEmployees(res)
  })
}, [])

  useEffect(() => {
    const foundEmployee = employees.find(employee => employee.id === ticket.employeeTickets[0]?.employeeId)
    setAssignedEmployee(foundEmployee)
    }, [employees, ticket])


  

  return (<section className="ticket" key={ticket.id}>
    <header className="ticket-info">#{ticket.id}</header>
    <div>{ticket.description}</div>
    <footer>
      <div>
        <div className="ticket-info">Assignee</div>
        <div>{assignedEmployee ? assignedEmployee.user?.fullName : "None"}</div>
      </div>
      <div>
        <div className="ticket-info">Emergency</div>
        <div>{ticket.emergency ? "yes" : "no"}</div>
      </div>
    </footer>
  </section>)
};
