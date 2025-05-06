import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getEmployeeById } from "../../../services/employee.jsx"

export const EmployeeDetails = () => {
  const {employeeId} = useParams()

  const [employeeDetails, setEmployeesDetails] = useState({})

  useEffect(() => {
    getEmployeeById(employeeId).then((data) => {
      const employeeObj = data[0]
      setEmployeesDetails(employeeObj)
    })
  }, [employeeId])


  return (
    <div  className="employees">
    <div>
      <header>{employeeDetails.user?.fullName}</header>
    </div>
    <div>
      <header>Email : </header>
      <span>{employeeDetails.user?.email}</span>
    </div>
    <div>
      <header>Rate : </header>
      <span>{employeeDetails.rate}</span>
    </div>
    <div>
      <header>Specialty : </header>
      <span>{employeeDetails.specialty}</span>
    </div>
    </div>
  )
}