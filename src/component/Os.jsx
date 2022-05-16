import React from'react';

const Card =()=>{
    return <div>
        <h1> Mobile Operating System</h1>
        <ul>
         <li>Android</li>
         <li>Blackberry</li>
         <li>iPhone</li>
         <li>Windows Phone</li>
        </ul>
        <div><h1>Mobile Manufacturer</h1>
        <ul type="square">
         <li>Samsung</li>
         <li>HTC</li>
        </ul>
         <ul>
         <li style={{marginTop:"-15px"}}>Micromax</li>
         </ul>
         <ul type="circle" style={{marginTop:"-15px"}}>
         <li>Apple</li>
        </ul>
        </div>
       </div>
        
}

export default Card