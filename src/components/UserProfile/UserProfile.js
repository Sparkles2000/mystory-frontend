import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./UserProfile.css";


const BASE_URL = 'http://127.0.0.1:3000/users';

function UserProfile() {
  const [user, setUser] = useState({});
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const URL =`${BASE_URL}/${id}`;
    fetch(URL)
      .then(r => r.json())
      .then(userData => {
        setUser(userData);
      })
      .catch(err => console.error(err))
  }, [id])

  useEffect(() => {
    console.log(user);
  }, [user])
  return (
    <div className="user-profile-container">
      <h2 className="user-profile-heading">{user.alias}</h2>
      <img className="user-profile-image" src={user.img_url} alt={`${user.img_url}`} width="90%"/>
      <p className="user-profile-detail">Age: {user.age}</p>
      <p className="User-profile-detail">Story: {user.story}</p>
    </div>
  )
}

export default UserProfile;