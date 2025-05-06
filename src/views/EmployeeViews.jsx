import { Outlet, Route, Routes } from "react-router-dom"
import { Welcome } from "../components/welcome/welcome.jsx"
import { TicketList } from "../components/tickets/ticketList.jsx"
import { CustomerList } from "../components/tickets/customers/customerList.jsx"
import { CustomerDetails } from "../components/tickets/customers/customerDetails.jsx"
import { EmployeeList } from "../components/tickets/employees/employeeListState.jsx"
import { EmployeeDetails } from "../components/tickets/employees/employeeDetails.jsx"
import { EmployeeForm } from "../components/forms/EmployeeForms.jsx"
import { EmployeeNav } from "../components/NAV/EmployeeNav.jsx"

export const EmployeeViews = ({currentUser}) => {

  return (
  <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <EmployeeNav />
              <Outlet />
            </>
          }
        >
          <Route index element={<Welcome />} />
          <Route path="tickets" element={<TicketList currentUser={currentUser} />} />

          <Route path="customers">
            <Route index element={<CustomerList />} />
            <Route path=":customerId" element={<CustomerDetails />} />
          </Route>

          <Route path="employees">
            <Route index element={<EmployeeList />} />
            <Route path=":employeeId" element={<EmployeeDetails />} />
          </Route>
        </Route>
        <Route path="profile" element={<EmployeeForm currentUser={currentUser}/>}/>
      </Routes>
    </>
  )
}