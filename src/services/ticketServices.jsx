export const getAllTickets = async () => {
  const response = await fetch(
    "http://localhost:8088/serviceTickets?_embed=employeeTickets"
  );
  const responseData = response.json();

  return responseData;
};

export const assignTicket = (employeeTicket) => {
  return fetch("http://localhost:8088/employeeTickets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employeeTicket),
  });
};

export const updateTicket = (ticket) => {
  return fetch(`http://localhost:8088/serviceTickets/${ticket.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ticket),
  });
};

export const handleDelete = (id) => {
  return fetch(`http://localhost:8088/serviceTickets/${id}`, {
    method: "DELETE",
  })
};


export const CreateTicket = (ticket) => {
  return fetch("http://localhost:8088/serviceTickets", {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(ticket)
  })
}
