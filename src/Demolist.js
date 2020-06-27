import React from 'react';




     const Demolist = (props) => {
         return ( 
         <div class="main ma4 bg-light-pink dib pa4 grow tc br4">
         <img src ={`https://joeschmoe.io/api/v1/${props.name}`} alt ="Demo" />
         <h1 className=""> {props.name} </h1>
         <p> {props.work} </p>
         <p> {props.email} </p>
             
         </div>
         )
     }  

export default Demolist;