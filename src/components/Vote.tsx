import {useState} from 'react';
import './Vote.css';



function Vote(){
  const [chocolate,setChocolate] = useState(0)

  function ChocolateUp(){
    setChocolate(prev => prev +1)
  }
const ChocolateStyle = {
  width: chocolate +"px"
}



  return(
    <div className="Vote">
     <div>
     <h3>Vote Here</h3>
     <button onClick={ChocolateUp}>Chocolate</button>
     <button>Vanilla</button>
     <button>Strawberry</button>
     </div> 
     <div>
       <p>Chocolate:</p>
       <p className="chocolateBar" style={ChocolateStyle}>c</p>
       {chocolate}
       <p>Vanilla:</p>
       <p></p>
       <p>Strawberry:</p>
       <p></p>
     </div>
    </div>
  )
}

export default Vote;