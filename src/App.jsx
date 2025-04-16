import { useEffect, useState } from "react"
import { getAllTickets } from "./ticketServices.jsx"
import "./app.css"

export const App = () => {

  const [allTickets, setAllTickets] = useState([])
  const [showEmergency, setShowEmergencyOnly] = useState(false)
  const [filteredTickets, setFilteredTickets] = useState([])

  useEffect(() => {
    getAllTickets().then(ticketsArray => {
      setAllTickets(ticketsArray)
      console.log("tickets set")
    })
  }, [])

  useEffect(() => {
   if(showEmergency){
    const emergencyTickets = allTickets.filter((t) => t.emergency === true)
    setFilteredTickets(emergencyTickets)
   }
   else{
    setFilteredTickets(allTickets)
   }
  }, [showEmergency, allTickets]) // waiting for the state to change, init allTickets is empty [], but this runs when 
  // allTickets state changes from the api fetch, the first useEffect function on line 11, that sets the state to update
  // because of hte setAllTickets with the argument of ticketsArray


  return <div className="tickets-container">
    <h2>Tickets</h2>
    <div>
      <button className="filter-btn btn-primary" onClick={() => setShowEmergencyOnly(true)}>Emergency</button>
      <button className="filter-btn btn-primary" onClick={() => setShowEmergencyOnly(false)}>Show All</button>
    </div>
    <article className="tickets">
      {filteredTickets.map((ticket) => {
        return (
          <section className="ticket" key={ticket.id}>
            <header className="ticket-info">
              #{ticket.id}
            </header>
            <div>{ticket.description}</div>
            <footer>
              <div>
                <div className="ticket-info">
                  Emergency
                </div>
                <div>{ticket.emergency ? "yes" : "no"}</div>
              </div>
            </footer>
            
          </section>
        )
      })}
    </article>


  </div>
}

