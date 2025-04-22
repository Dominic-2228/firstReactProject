import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/ticketServices.jsx";
import "./tickets.css";
import { Ticket } from "./tickets.jsx";
import { FilterBar } from "./ticketFilter.jsx";

export const TicketList = () => {
  const [allTickets, setAllTickets] = useState([]);
  const [showEmergency, setShowEmergencyOnly] = useState(false);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const foundTickets = allTickets.filter(ticket => ticket.description.toLowerCase().includes(searchTerm.toLowerCase()))
    setFilteredTickets(foundTickets)
  }, [searchTerm, allTickets])

  useEffect(() => {
    getAllTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray);
      console.log("tickets set");
    });
  }, []);

  useEffect(() => {
    if (showEmergency) {
      const emergencyTickets = allTickets.filter((t) => t.emergency === true);
      setFilteredTickets(emergencyTickets);
    } else {
      setFilteredTickets(allTickets);
    }
  }, [showEmergency, allTickets]);

  return (
    <div className="tickets-container">
      <h2>Tickets</h2>
      <FilterBar setShowEmergencyOnly={setShowEmergencyOnly} setSearchTerm={setSearchTerm}/>
      <article className="tickets">
        {filteredTickets.map((ticket) => (
          <Ticket key={ticket.id} ticket={ticket} />
        ))}
      </article>
    </div>
  );
};
