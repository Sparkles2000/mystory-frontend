import React, { useState, useEffect } from 'react';
import "./UserContainer.css";
import User from '../User/User';
import UserForm from "../UserForm/UserForm";

const BASE_URL = 'http://127.0.0.1:3000/users';

function UserContainer() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then(r => r.json())
      .then(userData => setUsers(userData))
  }, [])

  function deleteUser(userId) {
    const URL = `${BASE_URL}/${userId}`; // BASE_URL + `/${userId}`
    const config = { method: "DELETE" };
    fetch(URL, config)
      .then(r => r.json())
      .then(() => {
        const newUsers = users.filter(user => user.id !== userId);
        setUsers(newUsers);
      })
  }

  function createUser(user) {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    }

    fetch(BASE_URL, config)
      .then(r => r.json())
      .then(newUser => {
        const newUsers = [...users, newUser];
        setUsers(newUsers);
      })
  }

  function updateUser(id, updatedUser) {
    fetch(`${BASE_URL}/${id}`, {
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
    <div className="User-container">
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