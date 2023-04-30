import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Panier from './Panier';



const DetailsChaussure = () => {
    const [chaussure, setChaussure] = useState(null);
    const { id } = useParams();  
    const [panier, setPanier] = useState([]);
    const handleAddToCart = () => {
    setPanier([...panier, chaussure]) ;
      


  }
 

  useEffect(() => {
    axios
      .get(`https://example-data.draftbit.com/sneakers/${id}`)
      .then((res) => setChaussure(res.data));
  }, [id]);

   

  if (!chaussure) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <h1>{chaussure.title}</h1>
      <img src={chaussure.media.thumbUrl} alt={chaussure.title} />
      <p>Marque: {chaussure.brand}</p>
      <p>Couleur: {chaussure.colorway}</p>
      <p>Prix: {chaussure.retailPrice}$</p>
      <Link to="/panier">Accéder au panier</Link>
      <button onClick={handleAddToCart}>Ajouter au panier</button>
      <Link to="/homme/chaussures/sneakers">Retour à la liste des chaussures</Link>
      
    </div>
  );
};

export default DetailsChaussure;
