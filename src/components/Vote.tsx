import {useState} from 'react';
import './Vote.css';



function Vote(){
  const [sizeChocolate,setChocolate] = useState(0)
  const [sizeVanilla,setVanilla] = useState(0)
  const [sizeStrawberry,setStrawberry] = useState(0)

  function sizeUpChocolate(){
    setChocolate(prev => prev +1)
  }

  function sizeUpVanilla(){
    setVanilla(prev => prev +1)
  }

  function sizeUpStrawberry(){
    setStrawberry(prev => prev +1)
  }
const chcoclateStyle= {
  width: sizeChocolate +"px",
}

const vanillaStyle= {
  width: sizeVanilla +"px",
}
const strawberryStyle= {
  width: sizeStrawberry +"px",
}


let totalVotes: number = sizeChocolate + sizeVanilla + sizeStrawberry;

let additionalChocolate="";
if(sizeChocolate === 0 ){
  additionalChocolate = " displayNone"
  
}
let additionalVanilla="";
if(sizeVanilla === 0 ){
  additionalVanilla = " displayNone"
  
}
let additionalClass="";
if(sizeStrawberry === 0 ){
  additionalClass = " displayNone"
  
}
let noVote=""
if (totalVotes !==0){
  noVote = " displayNone"
}




  return(
    <div className="Vote">
     <div>
     <h3>Vote Here</h3>
     <button onClick={sizeUpChocolate}>Chocolate</button>
     <button onClick={sizeUpVanilla}>Vanilla</button>
     <button onClick={sizeUpStrawberry}>Strawberry</button>
     </div> 
     <div>
      
      
       <p className= {additionalChocolate}> Chocolate: {sizeChocolate}, Percentage: {(sizeChocolate / totalVotes)*100}</p>
       <p className={"chocolateBar" + additionalChocolate} style={chcoclateStyle}></p>
      
    
       <p className= {additionalVanilla}> Vanilla: {sizeVanilla}, Percentage: {(sizeVanilla / totalVotes)*100}</p>
       <p className={"vanillaBar"+ additionalVanilla} style={vanillaStyle}></p>
       
      
       <p className= {additionalClass}> Strawberry: {sizeStrawberry}, Percentage: {(sizeStrawberry / totalVotes)*100}</p>
       <p className={"strawberryBar" + additionalClass} style={strawberryStyle}></p>
      <p className ={noVote}>No Votes Yet!</p>
     </div>
    </div>
  )
}

export default Vote;