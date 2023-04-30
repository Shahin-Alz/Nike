import React from 'react';
import NavBar from '../components/NavBar';
import Logo from '../components/Logo';
import Inp from '../components/Inp';
import Chaussures from '../components/Chaussures';
import Video from '../components/Video';
import Carousel from '../components/Caroussel';
//import Cards from "../components/Cards";





const Home = () => {
    return (

        <div className = 'Home'>
        <div className = 'Nav'>
        <div > 
            <Logo/>
        </div> 
        <div> 
            <NavBar/> 
        </div> 
        <div> 
            <Inp/>
        </div> 
        </div> 
        <div className = 'titre-SousTitre' >
        <h1> Tema les claquettes c 'est <span>Nike</span></h1> 
        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quo culpa voluptas nesciunt ? Dicta repudiandae eaque quam asperiores quisquam minus ipsam. </p> 
        <button> Acheter</button> 
        </div>

        <div className = 'videoFond' >
        <Video/>
        </div>

        <div className = 'caroussel' >
        <Carousel/>
        </div>


        </div>

    );
};

export default Home;