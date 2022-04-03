import {useState} from "react";
import Logo from "./logo.png";
import Sidebar from "./Sidebar";
function MobileNav() {
  const[open, setOpen] = useState(false); 
  
  function handle() {
    open ? setOpen(false) : setOpen(true)
  };
  
  return (
    <>
     <div className="mobile-nav">
      <div>
        <img src={Logo} alt="dojoKids-logo" />
      </div>
      <div>
        <button  onClick={handle} className="toggleBtn">
          <span class="material-icons">spa</span>
        </button>
      </div>
      </div>
      <Sidebar class={open ? 'added' : 'sidebar' } />
    </>
  );
}

export default MobileNav;
