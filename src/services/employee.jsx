export const getEmployeeById = (employeeId) => {
  return fetch(`http://localhost:8088/employees?userId=${employeeId}&_expand=user`).then((res) => {
    return res.json()
  })
}