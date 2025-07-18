import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCustomerService } from "../../../services/customerService.jsx"
import "./customers.css"

export const CustomerDetails = () => {
  const [customer, setCustomer] = useState({})
  const {customerId} = useParams()


  useEffect(() => {
    getCustomerService(parseInt(customerId)).then((data) => {
      const customerObj = data[0]
      setCustomer(customerObj)

    })
  }, [customerId])

  return (
  <section className="customer">
    <header className="customer-header">{customer.user?.fullName}</header>
    <div>
      <span className="customer-info">Email : </span>
      {customer.user?.email}
    </div>
    <div>
      <span className="customer-info">Address : </span>
      {customer.address}
    </div>
    <div>
      <span className="customer-info">Phone Number : </span>
      {customer.phoneNumber}
    </div>
  </section>
  )
} 