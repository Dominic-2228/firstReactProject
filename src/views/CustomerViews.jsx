import { Outlet, Route, Routes } from "react-router-dom";
import { Welcome } from "../components/welcome/welcome.jsx";
import { CustomerNav } from "../components/NAV/CustomerNav.jsx";
import { TicketList } from "../components/tickets/ticketList.jsx";
import { TicketForm } from "../components/forms/TicketForm.jsx";

export const CustomerViews = ({ currentUser }) => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <CustomerNav />
              <Outlet />
            </>
          }
        >
          <Route index element={<Welcome />} />
          <Route path="tickets">
            <Route index element={<TicketList currentUser={currentUser} />} />
            <Route path="create" element={<TicketForm currentUser={currentUser}/>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
