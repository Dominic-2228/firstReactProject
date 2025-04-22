import "./customers.css";
import { useEffect, useState } from "react";
import { getNonStaffUsers } from "../../../services/userService.jsx";
import { User } from "../../users.jsx/user.jsx";

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
        return <User user={customerObj} />;
      })}
    </div>
  );
};
