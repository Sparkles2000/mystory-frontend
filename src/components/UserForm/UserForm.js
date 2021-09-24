import React, { useState } from 'react'
import "./UserForm.css"


function UserForm({ createUser }) {
  const [formState, setFormState] = useState({
    alias: "",
    img_url: "",
    age: undefined,
    story: ""
  })

  function handleUpdate(e) {
    const userInput = e.target.value;
    const fieldName = e.target.name;
    setFormState({
      ...formState,
      [fieldName]: userInput
    })
  }

  function handleSubmit(e) { 
    e.preventDefault();
    const user = {
      alias: formState.alias,
      img_url: formState.img_url,
      age: parseInt(formState.age),
      story: formState.story,
    };
    createUser(user);
  }

  return (
    <div className="user-form">
      <h2 className="user-form-heading">Create User</h2>
      <form onSubmit={handleSubmit}>
        <label> alias: <input type="text" name="alias" value={formState.alias} onChange={handleUpdate} /> </label>
        <label> image: <input type="text" name="img_url" value={formState.img_url} onChange={handleUpdate} /> </label>
        <label> age: <input type="text" name="age" value={formState.age} onChange={handleUpdate} /> </label>
        <label> story: <input type="text" name="story" value={formState.story} onChange={handleUpdate} /> </label>
        <button type="submit">Create User</button>
      </form>
    </div>
  )
}

export default UserForm;