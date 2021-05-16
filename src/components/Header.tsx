import {useState} from 'react';
import './Header.css'
interface Props{
  user:string;

}

function Header({user}:Props){
  
  return(
    <div className="Header">
      <h1>Ice Cream Wars</h1>
      {/* <p>{user}</p> */}
    </div>
  )
}

export default Header;