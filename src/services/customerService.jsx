export const getCustomerService = (userId) => {
  return fetch(`http://localhost:8088/customers?userId=${userId}&_expand=user`).then((res) => {
   return res.json()
  })
}