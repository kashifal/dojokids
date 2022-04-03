import React from 'react';
import SolidButton from './SolidButton';

export default function Sidebar(props) {
  return (
      <div className={props.class}>
          <h1>You'r Showing Interest and It's Great...</h1><br />
           <SolidButton mt="5px" btnText="No Close @!!!" padding="10px 20px" color='black'   />
    </div>
  )
}
