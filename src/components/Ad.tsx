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
  }

  let addClass = "";
  if (darkTheme===  false){
    addClass =" Dark"
  }
  
  
 
    return(
      <div className={"AdDesigner"+ addClass}>
  
      <div className="border">
        <p style={style}>{flavor}</p>
      </div>
     
      </div>
    )
  }
  
  
  export default Ad;