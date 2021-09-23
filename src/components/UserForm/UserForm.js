import React, { useState } from 'react'
import "./UserForm.css"


function UserForm({ createUser }) {
  const [formState, setFormState] = useState({
    name: "",
    image: "",
    age: undefined,
    story: ""
  })

  function handleChange(e) {
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
      image: formState.image,
      age: parseInt(formState.age),
      story: formState.story,
    };
    createUser(user);
  }

  return (
    <div className="user-form">
      <h2 className="user-form-heading">New User</h2>
      <form onSubmit={handleSubmit}>
        <label> alias: <input type="text" alias="alias" value={formState.name} onChange={handleChange} /></label>
        <label> image: <input type="text" name="image" value={formState.image} onChange={handleChange} /></label>
        <label> age: <input type="text" name="age" value={formState.age} onChange={handleChange} /></label>
        <label> story: <input type="text" name="story" value={formState.story} onChange={handleChange} /></label>
        <button type="submit">New User</button>
      </form>
    </div>
  )
}

export default UserForm;