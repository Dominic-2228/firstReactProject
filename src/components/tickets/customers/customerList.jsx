import "./customers.css";
import { useEffect, useState } from "react";
import { getNonStaffUsers } from "../../../services/userService.jsx";
import { User } from "../../users.jsx/user.jsx";
import { Link } from "react-router-dom";

export const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getNonStaffUsers().then((customerArray) => {
      setCustomers(customerArray);
    });
  }, []);

  return (
    <div className="customers">
      {customers.map((customerObj) => {
        return <Link to={`/customers/${customerObj.id}`}>
          <User user={customerObj} />
           </Link>;
      })}
    </div>
  );
};
