import "./user.css"

export const User = ({user}) => {
  return (
    <div className="user" key={user.id}>
    <div className="user-info">
      <div>Name:</div>
      <div>{user.fullName}</div>
      <div>Email:</div>
      <div>{user.email}</div>
    </div>
    </div>
  );
}