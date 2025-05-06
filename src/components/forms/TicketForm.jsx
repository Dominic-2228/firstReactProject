import { useState } from "react";
import "./Form.css";
import { CreateTicket } from "../../services/ticketServices.jsx";
import { useNavigate } from "react-router-dom";
export const TicketForm = ({ currentUser }) => {
  const [ticket, setTicket] = useState({ description: "", emergency: false });
  const navigate = useNavigate();

  const handleSave = (event) => {
    event.preventDefault();
    if (ticket.description) {
      const newTicket = {
        userId: currentUser.id,
        description: ticket.description,
        emergency: ticket.emergency,
        dateCompleted: "",
      };

       CreateTicket(newTicket).then(() => {
        navigate("/tickets");
      });
    } else {
      window.alert("Please fill out the description");
    }
  };
  return (
    <form>
      <h2>New Service Ticket</h2>
      <fieldset>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Brief description of the Problem"
            onChange={(event) => {
              const copy = { ...ticket };
              copy.description = event.target.value;
              setTicket(copy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>
            Emergency
            <input
              type="checkbox"
              onChange={(event) => {
                const copy = { ...ticket };
                copy.emergency = event.target.checked;
                setTicket(copy);
              }}
            ></input>
          </label>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button
            className="form-btn btn-info"
            onClick={handleSave}
          >
            Submit Ticket
          </button>
        </div>
      </fieldset>
    </form>
  );
};
