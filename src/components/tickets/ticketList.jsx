import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/ticketServices.jsx";
import "./tickets.css";
import { Ticket } from "./tickets.jsx";
import { FilterBar } from "./ticketFilter.jsx";

export const TicketList = ({ currentUser }) => {
  const [allTickets, setAllTickets] = useState([]);
  const [showEmergency, setShowEmergencyOnly] = useState(false);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [openTicket, setOpenTicket] = useState(false);

  const getAndSetTickets = () => {
    getAllTickets().then((ticketsArray) => {
      if (currentUser.isStaff) {
        setAllTickets(ticketsArray);
      } else {
        const customerTickets = ticketsArray.filter(
          (ticket) => ticket.userId === currentUser.id
        );
        setAllTickets(customerTickets);
      }
    });
  };

  useEffect(() => {
    const foundTickets = allTickets.filter((ticket) =>
      ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTickets(foundTickets);
  }, [searchTerm, allTickets]);

  useEffect(() => {
    getAndSetTickets();
  }, [currentUser]);

  useEffect(() => {
    if (showEmergency) {
      const emergencyTickets = allTickets.filter((t) => t.emergency === true);
      setFilteredTickets(emergencyTickets);
    } else {
      setFilteredTickets(allTickets);
    }
  }, [showEmergency, allTickets]);

  //filter Open Tickets
  useEffect(() => {
    if (openTicket) {
      const filterOpen = allTickets.filter((ticket) => !ticket.dateCompleted);
      setFilteredTickets(filterOpen);
    } else {
      setFilteredTickets(allTickets);
    }
  }, [openTicket, allTickets]);

  return (
    <div className="tickets-container">
      <h2>Tickets</h2>
      <FilterBar
        setShowEmergencyOnly={setShowEmergencyOnly}
        setSearchTerm={setSearchTerm}
        currentUser={currentUser}
        setOpenTicket={setOpenTicket}
      />
      <article className="tickets">
        {filteredTickets.map((ticket) => (
          <Ticket
            key={ticket.id}
            ticket={ticket}
            currentUser={currentUser}
            getAndSetTickets={getAndSetTickets}
          />
        ))}
      </article>
    </div>
  );
};
