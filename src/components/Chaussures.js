import axios from 'axios';
import React, {useEffect,useState} from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
import Inp from './Inp';
import CardAll from './CardAll';

const Chaussures = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://example-data.draftbit.com/sneakers")
            .then((res) => setData(res.data));
    }, []);

const [filteredData, setFilteredData] = useState(data);
const [selectedBrand, setSelectedBrand] = useState(null);
const [selectedColor, setSelectedColor] = useState(null);
const [selectedPriceRange, setSelectedPriceRange] = useState(null);

const handleBrandFilter = (brand) => {
    setSelectedBrand(brand);
};

const handleColorFilter = (color) => {
    setSelectedColor(color);
};

const handleResetFilter = () => {
    setSelectedBrand(null);
    setSelectedColor(null);
    setFilteredData(data);
    setSelectedPriceRange(null);
};

const handlePriceRangeFilter = (priceRange) => {
    setSelectedPriceRange(priceRange);
    };

useEffect(() => {
    let newData = data;
    if (selectedBrand) {
        newData = newData.filter((item) => item.brand === selectedBrand);
    }
    if (selectedColor) {
        newData = newData.filter((item) => item.colorway.includes(selectedColor));
    }
    if (selectedPriceRange) {
        switch (selectedPriceRange) {
          case "-100":
            newData = newData.filter((item) => item.retailPrice < 100);
            break;
          case "100-150":
            newData = newData.filter((item) => item.retailPrice >= 100 && item.retailPrice <= 150);
            break;
          case "+150":
            newData = newData.filter((item) => item.retailPrice > 150);
            break;
          default:
            break;}}



    setFilteredData(newData);
}, [data, selectedBrand, selectedColor,selectedPriceRange]);


    return ( 
    <div>
        <div className = 'Nav'>
            <div>
                <Logo/>
            </div>   
            <div>
                <NavBar/>
            </div>  
            <div>
                <Inp/>
            </div>  
        </div>  
        <h1>Toutes les Chaussures</h1>
        <div className='ContenuChaussures'>
            <div className='parametres'>
            <h2>Marque</h2>
                <button onClick={() => handleBrandFilter('adidas')}>Adidas</button>
                <button onClick={() => handleBrandFilter('Nike')}>Nike</button>
                <button onClick={() => handleBrandFilter('Reebok')}>Reebok</button>
                <h2>Couleur</h2>
                <button onClick={() => handleColorFilter('White')}>Blanc</button>
                <button onClick={() => handleColorFilter('Black')}>Noir</button>
                <button onClick={() => handleColorFilter('Red')}>Rouge</button>
                <h2>Prix</h2>
<button onClick={() => handlePriceRangeFilter("-100")}>Moins de 100€</button>
<button onClick={() => handlePriceRangeFilter("100-150")}>Entre 100€ et 150€</button>
<button onClick={() => handlePriceRangeFilter("+150")}>Plus de 150€</button>
                <button onClick={handleResetFilter}>Réinitialiser les filtres</button>

            </div>
            <div className='DataShoes'>
                <ul className='Allshoes'>
                    {filteredData.map((chaussures,index)=>(
                    <CardAll key={index} chaussures={chaussures}/> 
                    ))}
                </ul>
            </div>
        </div>
    </div>
    );
};

export default Chaussures;