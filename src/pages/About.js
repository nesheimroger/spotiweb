import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {

  render (){
    return (
      <div className="About">
        <h1>About page</h1>
        <Link to="/">Go to Home page</Link>
      </div>
    )
  }
  
}

export default About;
