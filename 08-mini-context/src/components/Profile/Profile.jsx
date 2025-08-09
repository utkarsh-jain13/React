import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  return user ? (
    <div>Hey, {user?.username || "-"}</div>
  ) : (
    <div>Please Login!</div>
  );
}

export default Profile;
