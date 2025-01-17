import React from 'react';

const About = ({ name, education }) => (
  <div id="about">
    <h1 className="neon-text">{name}</h1>
    <p>{education}</p>
  </div>
);

export default About;

