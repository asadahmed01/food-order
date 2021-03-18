import React, { useEffect, useState } from "react";
import { getCurrentUser, logout } from "./services/authServices";
import { deleteAccount } from "./services/deleteAccount";
function Profile(props) {
  const [user, setUser] = useState("");
  useEffect(() => {
    const user = getCurrentUser();
    setUser(user);
  }, []);

  const handleRemove = () => {
    deleteAccount(user.id);
    logout();
    window.location = "/signup";
  };
  return (
    <div className="min-h-screen text-center mt-40">
      <button
        className="bg-red-300 p-4 rounded-md font-semibold text-2xl shadow-md hover:bg-red-500 hover:text-white focus:outline-none "
        onClick={() =>
          window.confirm(
            "Are you sure you want to DELETE your account permanently?"
          ) && handleRemove()
        }
      >
        Delete Account
      </button>
    </div>
  );
}

export default Profile;
