import React from 'react';


export default function Box(props) {
    const style = {
       padding: "20px",
  borderRadius: "5px",
  boxShadow: "#50d344 0px 0px 0px 4px",
        cursor: "pointer",
        backgroundColor: 'white',
    }
  return (
      <div className='single' style={style}>

          <img src={props.icon} alt="" />
          <h3> {props.text}</h3> 
    </div>
  )
}
