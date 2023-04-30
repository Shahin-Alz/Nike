import React from "react";
import { Link } from 'react-router-dom';

const CardAll = ({chaussures}) => {


    return (
        <Link className="zebi" to={`/chaussures/${chaussures.id}`}>
            <div className="cardAll">
                <img className="imgCard" src={chaussures.media.imageUrl} alt={chaussures.title} />
                <div className="contenuCardAll">
                    <div className="contenuHautAll">
                        <h3>{chaussures.title }</h3>
                        <h3>{chaussures.retailPrice}</h3>
                    </div>
                    <p>{chaussures.gender}</p>
                </div>
            </div>
        </Link>
    
    
    );
};

export default CardAll;