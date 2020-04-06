import React, { useState, useEffect } from "react";
import "./UsersWithAvatars.scss";
import { UserInTheList } from "./UserInTheList/UserInTheList";

export function UsersWithAvatars() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();
      setListOfUsers(users);
    }

    getUsers();
  }, []);

  return (
      <div className="blue-background">
        <ul className="users-container">
          {listOfUsers.map(user => {
            return <UserInTheList user={user}/>;
          })}
        </ul>
      </div>
  );
}
