import { useEffect, useState } from "react";
import { employeeService } from "../../services/employeeServices.jsx";
import { assignTicket, updateTicket } from "../../services/ticketServices.jsx";
import { handleDelete } from "../../services/ticketServices.jsx";

export const Ticket = ({ ticket, currentUser, getAndSetTickets }) => {
  const [employees, setEmployees] = useState([]);
  const [assignedEmployee, setAssignedEmployee] = useState({});

  useEffect(() => {
    employeeService().then((res) => {
      setEmployees(res);
    });
  }, []);


  useEffect(() => {
    const foundEmployee = employees.find(
      (employee) => employee.id === ticket.employeeTickets[0]?.employeeId
    );
    setAssignedEmployee(foundEmployee);
  }, [employees, ticket]);

  const handleClaim = () => {
    const currentEmployee = employees.find(
      (employee) => employee.userId === currentUser.id
    );

    const newEmployeeTicket = {
      employeeId: currentEmployee.id,
      serviceTicketId: ticket.id,
    };

    assignTicket(newEmployeeTicket).then(() => {
      getAndSetTickets();
    });
  };

  const handleClose = () => {
    const closedTicket = {
      id: ticket.id,
      userId: ticket.userId,
      description: ticket.description,
      emergency: ticket.emergency,
      dataCompleted: new Date()
    }

    updateTicket(closedTicket).then(() => {
      getAndSetTickets()
    })
  }
  return (
    <section className="ticket" key={ticket.id}>
      <header className="ticket-info">#{ticket.id}</header>
      <div>{ticket.description}</div>
      <footer> {currentUser.isStaff ?  
      <>
        <div>
          <div className="ticket-info">Assignee</div>
          <div>
            {assignedEmployee ? assignedEmployee.user?.fullName : "None"}
          </div>
        </div>
        <div>
          <div className="ticket-info">Emergency</div>
          <div>{ticket.emergency ? "yes" : "no"}</div>
        </div>
        <div className="btn-container">
          {currentUser.isStaff && !assignedEmployee ? (
            <button className="btn btn-secondary" onClick={handleClaim}>
              Claim
            </button>
          ) : (
            ""
          )}
          {assignedEmployee?.userId === currentUser.id &&
          !ticket.dataCompleted ? (
            <button className="btn btn-warning" onClick={handleClose}>Close</button>
          ) : (
            ""
          )}
        </div>
        </>
 : <button className="btn btn-warning" onClick={() => {
  handleDelete(ticket.id).then(() => {
    getAndSetTickets()
  })
 }}>Delete</button>}
      </footer>
    </section>
  );
};
