export const Employee = ({ employee }) => {
  return (
    <div key={employee.id}>
      <div>Name:</div>
      <div>{employee.fullName}</div>
      <div>Email:</div>
      <div>{employee.email}</div>
    </div>
  );
};
