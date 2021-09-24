import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './User.css'
const { id, alias, image, age, story } = User

function User({ user, deleteUser, updateUser, initialDelay=0 }) {
  const [newUser, setNewUser] = useState({ ...user });
  const [editMode, setEditMode] = useState(false);
  const [render, setRender] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {setRender(true)}, initialDelay)
    return () => clearTimeout(timeout)
  }, [initialDelay])

  function handleChange(e) {
    const updatedValue = { ...newUser };
    updateUser[e.target.name] = e.target.value;
    setNewUser({ ...updatedValue });
  }

  function toggleEdit() {
    setEditMode(!editMode);
  }

  function handleDelete() {
    deleteUser(id);
  }

  function handleUpdate(e) {
    e.preventDefault();
    updateUser(newUser);
    setEditMode(false);
}    

if (!render) {
  return <></>
}

  return (
    <div className="user"> 
      <h3> <Link to={`/users/${id}`}>{alias}</Link> </h3>
      <img src={image} alt={`${image}`} width="90%"/>
      <div className="User-desc"></div>
        <p>Age: {age}</p>
        <p>Story: {story}</p>
      {editMode && (
        <>
          <form onSubmit={handleUpdate}>
            <label> alias: <input type="text" alias="alias" value={newUser.alias} onChange={handleChange} /></label>
            <label> image: <input type="text" name="image" value={newUser.image} onChange={handleChange} /></label>
            <label> age: <input type="text" name="age" value={newUser.age} onChange={handleChange} /></label>
            <label> story: <input type="text" name="story" value={newUser.story} onChange={handleChange} /></label>
            <button className="user-btn" onClick={handleUpdate}>Update User info</button>
            <button className="user-btn" onClick={handleDelete}>Delete User</button>
          </form>
        </>
      )}
      <button onClick={toggleEdit}>Edit</button>
    </div>
  );
}

export default User;