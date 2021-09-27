import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import sad from "./sad.jpg";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-heading">MyStory.com</h1>
      <img className="home-img" alt="Sad" src={sad} />
      <Link className="home-link" to="/users">Let's get started!</Link>
    </div>
  )
}

export default Home;