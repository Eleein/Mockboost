import React, { useState, useEffect } from "react";

export function Users() {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        setUsers(users);
      });
  },[]);

  return (
    <>
      {users &&
        users
          .filter(user => user.address.city.includes("South"))
          .map(user => {
            return (
              <div key={user.id}>
                <ul>
                  <li>
                    <strong>Name:</strong> {user.name}
                    <strong> City:</strong>
                    {user.address.city} <strong>Company:</strong>{" "}
                    {user.company.name}
                  </li>
                </ul>
              </div>
            );
          })}
    </>
  );
}
