import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './page/Home';
import Chaussures from './components/Chaussures';
import DetailsChaussure from './page/DetailChaussure';
import Panier from './page/Panier';



const App = () => {
  return ( 
  <div>
    <BrowserRouter>
    <Routes>

    <Route path = "/" element = {<Home/>}/> 
    <Route path = "/homme/chaussures/sneakers" element = {<Chaussures />}/>
    <Route path="/chaussures/:id"   element = {<DetailsChaussure />}/>
    <Route path = "/panier"element = {<Panier />}/> 
    </Routes> 
    </BrowserRouter> 
    </div>
  );
};

export default App;