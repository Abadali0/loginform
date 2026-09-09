import React, { useContext } from "react";
import { AuthContext } from "../App";

const Child2 = () => {
  const { userName, setUserName } = useContext(AuthContext);

  const handleLogout = () => {
    setUserName("");
  };
  return (
    <div>
      Child2: {userName}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Child2;