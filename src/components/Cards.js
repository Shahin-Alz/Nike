
 import React from "react";

 const Card = ({ item }) => {
   return (
     <div className="card">
       <img className="imgCard" src={item.media.imageUrl} alt={item.title} />
       <div className="contenuCard">
         <div className="contenuHaut">
       <h3>{item.brand + " Air Force One"}</h3>
       <h3>110$</h3>
       </div>
       <p>{item.gender}</p>
       </div>
     </div>
   );
 };

 export default Card;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Card = () => {

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://example-data.draftbit.com/sneakers")
//       .then((response) => setData(response.data))
    
//       .catch((error) => console.log(error));
//   }, []);
  
 

//   return (
//     <div className="card">
//       <img className="imgCard" src={Card.media.imageUrl} alt={Card.title} />
//       <div className="contenuCard">
//         <div className="contenuHaut">
//       <h3>{Card.brand + " Air Force One"}</h3>
//       <h3>110$</h3>
//       </div>
//       <p>{Card.gender}</p>
//       </div>
//     </div>
//   );
// };

// export default Card;
