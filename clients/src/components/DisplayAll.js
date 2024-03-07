import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DisplayAll = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // Fetch users from the server
    axios
      .get("http://localhost:8000/api/users")
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <Link
              to={`https://www.instagram.com/${user.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="instagramLink"
            >
              {user.instagram}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayAll;
