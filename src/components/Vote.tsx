import {useState} from 'react';


function Vote(){





  return(
    <div className="Vote">
     <div>
     <h3>Vote Here</h3>
     <button>Chocolate</button>
     <button>Vanilla</button>
     <button>Strawberry</button>
     </div> 
     <div>
       <p>Chocolate:</p>
       <p></p>
       <p>Vanilla:</p>
       <p></p>
       <p>Strawberry:</p>
       <p></p>
     </div>
    </div>
  )
}

export default Vote;