import React from 'react';
import web from './web-design.png';
import app from './mobile-app.png';
import machine from './neural.png';
import prog from './coding.png';
import Box from './Box';

export default function Teaching() {
     const style = {
    color: "#4FD344",
  };
  return (
      <div className="teaching">
         
          <div className="teaching-text">
            <h1>
         We <span style={style}>Dojo's</span> are teaching 
          <span style={style}> 1000+</span>  Students.
        </h1>
        <p>
          Yeah, We are teaching thousands of kids in-person and online. <span style={{color:'#50d344'}}>Explore Courses</span>
        </p>
               
              <div className="boxes">
                <Box text="Programming Course" icon={prog} />
                <Box text="Web Development Course" icon={web} />
                <Box text="App Development Course" icon={app} />
                <Box text="Artificial Intelligence Course" icon={machine} />
              </div>
        
          </div>
         
  </div>
  )
}
