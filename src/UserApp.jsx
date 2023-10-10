import { useState } from "react";
import UserList from "./UserList";

export default function UserApp() {
  const [endPoint, setEndPoint] = useState("users");
  const onClick = () => {
    setEndPoint("comments");
  };
  //   useEffect(() => {
  //     fetchUsers();
  //   }, []);
  return (
    <div>
      UserApp
      <h1>Lista de Usuario</h1>
      <button onClick={onClick}>Mostrar lista</button>
      <UserList endPoint={endPoint} />
    </div>
  );
}
