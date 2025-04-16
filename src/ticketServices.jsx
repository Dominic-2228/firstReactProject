export const getAllTickets = async () => {
  const response = await fetch("http://localhost:8088/serviceTickets")
  const responseData = response.json()

  return responseData

}