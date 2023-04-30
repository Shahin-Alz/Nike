// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// const Panier = ({panier}) => {
//   const location = useLocation();
//   const [panier, setPanier] = useState([]);

//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const newChaussure = {
//       title: params.get('title'),
//       thumbUrl: params.get('thumbUrl'),
//       brand: params.get('brand'),
//       colorway: params.get('colorway'),
//       retailPrice: params.get('retailPrice')
//     };
//     setPanier([...panier, newChaussure]);
//   }, []);

//   return (
//     <div>
//       <h1>Mon panier</h1>
//       {panier.map((chaussure, index) => (
//         <div key={index}>
//           <h2>{chaussure.title}</h2>
//           <img src={chaussure.thumbUrl} alt={chaussure.title} />
//           <p>Marque: {chaussure.brand}</p>
//           <p>Couleur: {chaussure.colorway}</p>
//           <p>Prix: {chaussure.retailPrice}$</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Panier;
import React from "react";

const Panier = ({ chaussures }) => {
    return (
       <div>
    //     <h2>Panier</h2>
    //    
       </div>
    );
  };
  
export default Panier ;