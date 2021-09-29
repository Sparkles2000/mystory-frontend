import React, { useState, useEffect } from 'react';
import "./User.css";
import { Link } from 'react-router-dom';

function User({ user, deleteUser, updateUser, initialDelay=0 }) {
  const { id, alias, img_url, age, story } = user
  const [updatedUser, setUpdatedUser] = useState({ ...user});
  const [editMode, setEditMode] = useState(false);
  const [render, setRender] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {setRender(true)}, initialDelay)
    return () => clearTimeout(timeout)
  }, [initialDelay])

  function handleDeleteUser() {
    deleteUser(id);
  }

  function handleChangeUser(e) {
    const updatedValue = { ...updatedUser };
      updatedValue[e.target.name] = e.target.value;
      setUpdatedUser({ ...updatedValue });
     }
      function toggleEdit() {
        setEditMode(!editMode);
      }
      function handleUpdate(e) { 
        e.preventDefault();
        const updatedUser = {
          alias: updateUser.alias,
          img_url: updateUser.img_url,
          age: parseInt(updateUser.age),
          story: updateUser.story,
    };
    updateUser(updatedUser);
    setEditMode(false);
    console.log()
  }
  if (!render) {
    return <></>
  }
  return (
    <div className="user"> 
      <h3> <Link to={`/users/${user.id}`}>{alias}</Link></h3>
      <img src={img_url} alt={`${img_url}`} width="90%"/>
      <div className="User-desc">
        <p>Age: {age}</p> 
        <p>Story: {story}</p>
      </div>
      {editMode && (
        <>
      <form onSubmit={handleChangeUser}>
        <label> alias: <input type="text" name="alias" value={updateUser.alias} onChange={handleUpdate} /> </label>
        <label> image: <input type="text" name="img_url" value={updateUser.img_url} onChange={handleUpdate} /> </label>
        <label> age: <input type="parseInt" name="age" value={updateUser.age} onChange={handleUpdate} /> </label>
        <label> story: <input type="text" name="story" value={updateUser.story} onChange={handleUpdate} /> </label>
        <button type="submit">Update User Info</button>
      </form>
      <button className="user-btn" onClick={handleDeleteUser}>Delete User</button>
    </>
      )}
      <button onClick={toggleEdit}>Edit</button>
    </div>
  );
}
export default User;