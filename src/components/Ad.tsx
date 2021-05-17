import {useState} from 'react';
import './Ad.css'
interface Props {
  flavor: string;
  fontSize: number;
  darkTheme: boolean;
}


function Ad({flavor, fontSize, darkTheme}:Props){
  const style ={
    fontSize:fontSize,
    fontFamily: 'Caveat'
  }

  let addClass = "";
  if (darkTheme===  false){
    addClass =" Dark"
  }
  
  
 
    return(
      <div className={"Ad"+ addClass}>
         
      <div>
      <h6>Vote For</h6>
        <p style={style}>{flavor}</p>
      </div>
     
      </div>
    )
  }
  
  
  export default Ad;