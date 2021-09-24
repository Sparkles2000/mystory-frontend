import React from 'react'
import { Link } from 'react-router-dom'
import "./About.css"
import sad from "./sad.jpg"

function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">MyStory.com</h1>
      <h2>Are you contiplating suicide, are you in an abusive situation, or just wanting advice or counseling? We are her for you! This is A sight that will give people like you, who without a voice, a chance to get the help they need.
          A Hotline Website for people who are being abused or are thinking about commiting suicide, or just need guidance.
          We are always annonymous and only use aliases unless you otherwise want your identity revealed.
          We have group intervention rooms for multiple people to interact including professional advocates.
          We also have one on one rooms for private discussions with an advocate or even another victim that you only want to share with that particular person.
          This website is confidential unless posting on the main forum.
      </h2>
      <img className="about-img" alt="Sad" src={sad} />
      <Link className="about-link" to="/user">Let's get started!</Link>
    </div>
  )
}
export default About;