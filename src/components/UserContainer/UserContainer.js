import React, { useState, useEffect } from 'react';
import { BASE_URL } from "../constraints/index.js";
import "./UserContainer.css";
import User from '../User/User';
import UserForm from "../UserForm/UserForm";

function UserContainer() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(BASE_URL + "users/")
      .then(r => r.json())
      .then(userData => setUsers(userData))
  }, [])

  function deleteUser(userId) {
    fetch(BASE_URL + "users/" + userId)
      .then(r => r.json())
      .then(() => {
        const newUsers = users.filter(user => user.id !== userId);
        setUsers(newUsers);
      })
  }

 
  function createUser(user) {
    fetch(BASE_URL + "users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => setUsers([...users, json]));

    // PESSIMISTIC RENDERING
  }

  function updateUser(id, updatedUser) {
    fetch(BASE_URL + "users/" + users.id, {
      method: "PATCH",
      headers: {
        "Accept-Header": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((r) => r.json())
      .then((updatedUser) => {
        const updatedUsers = users.map((user) => {
          if (user.id === updatedUser.id) return updatedUser;
          return user;
        });
        setUsers(updatedUsers);
      });
  }

  return (
    <div className="u-container">
      <UserForm createUser={createUser} />
      <div className="User-container-list">
        { users.length === 0
          ? <h1>Loading...</h1>
            :users.map(user => {
              return <User
                        key={user.id} 
                        user={user} 
                        deleteUser={deleteUser}
                        updateUser={updateUser}
                      /> })
        }
      </div>
    </div>
  )
}

export default UserContainer;