import { CustomerList } from "./components/tickets/customers/customerList.jsx"


import "./app.css"
import { TicketList } from "./components/tickets/ticketList.jsx"
import { EmployeeList } from "./components/tickets/employees/employeeListState.jsx"

export const App = () => {
  return <div>
    {/* <TicketList/> */}
    {/* <CustomerList/> */}
    <EmployeeList/>
  </div>
}

