import { useEffect, useState } from "react";
import "./Form.css";
import { getEmployeeById } from "../../services/employee.jsx";
import { updateEmployee } from "../../services/employeeServices.jsx";
import { useNavigate } from "react-router-dom";

export const EmployeeForm = ({ currentUser }) => {
  const [employee, setEmployee] = useState({});
  
  const navigate = useNavigate()


  const handleSubmit = (event) => {
    const stateChange = {...employee}
    stateChange[event.target.name] = event.target.value
    setEmployee(stateChange)
  }
  useEffect(() => {
    getEmployeeById(currentUser.id).then((data) => {
      const employeeObject = data[0];
      setEmployee(employeeObject);
    });
  }, [currentUser]);

  const handleSave = (event) => {
    event.preventDefault()

    const editedEmployee = {
      id: employee.id,
      specialty: employee.specialty,
      rate: employee.rate,
      userId: employee.userId
    }

    updateEmployee(editedEmployee).then(() => {
      navigate(`/employees/${currentUser.id}`)
    })
  }

  return (
    <form className="profile">
      <h2>Update Profile</h2>
      <fieldset>
        <div className="form-group">
          <label>Specialty: </label>
          <input
            type="text"
            value={employee?.specialty}
            required
            className="form-control"
            onChange={() => {handleSave}}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Hourly Rate: </label>
          <input
            type="number"
            value={employee?.rate}
            required
            className="form-control"
            onChange={() => {handleSave}}
          />
        </div>
        <fieldset>
          <div className="form-group">
            <button className="form-btn btn-primary" onClick={handleSave}>Save Profile</button>
          </div>
        </fieldset>
      </fieldset>
    </form>
  );
};
