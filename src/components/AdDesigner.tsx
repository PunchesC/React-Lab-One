import {useState} from 'react';
import './AdDesigner.css'

function AdDesigner(){
const [ad, setAd] = useState("")
const [theme, setTheme] = useState(true)
const [size, setSize]= useState(40);

function Strawberry(){
  setAd("Strawberry")
}
function Chocolate(){
  setAd("Chocolate")
}
function Vanilla(){
  setAd("Vanilla")
}

function lightThem(){
  setTheme(true);
}
function darkTheme(){
  setTheme(false)
}

function addSize(){
  setSize(prev => prev +5)
}
function downSize(){
  setSize(prev => prev -5)
}

let additionalClass="";
if(theme === false ){
  additionalClass = " dark"
}

const styles ={
  fontSize:size +"px"
}
  return(
    <div className="AdDesigner">
     
      <h1>AdDesigner</h1>
    <div className={"voteBox" + additionalClass}>
      <h2>Vote For</h2>
      <p style={styles}>{ad}</p>
    </div>
     <p>What to Support</p>
     <p>
       <button disabled={ad==="Chocolate"}onClick={Chocolate}>Chocolate</button>
       <button disabled={ad==="Vanilla"}onClick={Vanilla}>Vanilla</button>
       <button disabled={ad==="Strawberry"}onClick={Strawberry}>Strawberry</button>
     </p>
     <p>Color Theme</p>
     <p>
     <button onClick={lightThem}>Light</button>
       <button onClick={darkTheme}>Dark</button>
     </p>
     <p>Font Size</p>
     <p>
     <button onClick={addSize}>Up</button>
     {size}
       <button onClick={downSize}>Down</button>
     </p>
        
    </div>
  )
}


export default AdDesigner;