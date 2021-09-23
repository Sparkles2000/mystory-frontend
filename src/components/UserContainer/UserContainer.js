import { useState, useEffect } from 'react';
import { BASE_URL } from "../constraints/index.js";
import User from '../User/User';
import UserForm from "../UserForm/UserForm";
import "./UserContainer.css";

function UserContainer() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(BASE_URL + "users/")
      .then((res) => res.json())
      .then((json) => setUsers(json));
  }, []);

  function deleteUser(userId) {
    fetch(BASE_URL + "users/")
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
        const newUsers = [...user, newUser];
        setUsers(newUsers);
      })
  }

  function updateUser(id, updatedUser) {
    fetch(BASE_URL + "users/" + id, {
      method: "PATCH",
      headers: {
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
    <div className="user-container">
      <UserForm createUser={createUser} />
      <div className="user-container-list">
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