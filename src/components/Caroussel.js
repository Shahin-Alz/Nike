 import React, { useState, useEffect } from "react";
 import axios from "axios";
 import Card from "./Cards";

 const CardCarousel = () => {
   const [data, setData] = useState([]);
   const [currentSlide, setCurrentSlide] = useState(0);
   const [translateValue, setTranslateValue] = useState(0);
   const cardWidth = 40;

  

   useEffect(() => {
     axios
      .get("https://example-data.draftbit.com/sneakers")
       .then((response) => setData(response.data))
    
       .catch((error) => console.log(error));
   }, []);

   const filteredData = data.filter((item) => item.title.includes("Nike Air Force 1"));


   const goToPrevSlide = () => {
     if (currentSlide ===  0) {       setCurrentSlide(Math.ceil(filteredData.length / 2.5) - 1);
       setTranslateValue(-(Math.ceil(filteredData.length / 2.5) - 1) * cardWidth * 2.5);
    
      
     

     } else {
       setCurrentSlide(currentSlide - 1);
       setTranslateValue(translateValue + cardWidth * 2.5);
     }
   };

   const goToNextSlide = () => {
     if (currentSlide === Math.ceil(filteredData.length / 2.5) - 1) {
       setCurrentSlide(0);
       setTranslateValue(0);
     
     } else {
       setCurrentSlide(currentSlide + 1);
       setTranslateValue(translateValue - cardWidth * 2.5);
     }
   };

   return (
     <div className="card-carousel">
       <div
         className="card-carousel-wrapper"
         style={{
           transform: `translateX(${translateValue}%)`,
           transition: "transform ease-out 0.45s",
          
         }}
       >
         {filteredData.map((item, index) => (
           <Card key={index} item={item} />
         ))}
       </div>
       <div className="btn">
       <button className="carousel-prev" onClick={goToPrevSlide}       
      
 >
         &#60;
        
       </button>
       <button className="carousel-next" onClick={goToNextSlide}
       >
         &#62;
       </button>
       </div>
     </div>
   );
 };

 export default CardCarousel;

// import React ,{ useState} from 'react';
// import Card from "./Cards";

// const CardCarousel = () => {
 
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [translateValue, setTranslateValue] = useState(0);
//   const cardWidth = 40;
//   const filteredData = Card.filter((item) => item.title.includes("Nike Air Force 1"));
  



//   const goToPrevSlide = () => {
//     if (currentSlide ===  0) {
//       setCurrentSlide(Math.ceil(filteredData.length / 2.5) - 1);
//       setTranslateValue(-(Math.ceil(filteredData.length / 2.5) - 1) * cardWidth * 2.5);
    
      
     

//     } else {
//       setCurrentSlide(currentSlide - 1);
//       setTranslateValue(translateValue + cardWidth * 2.5);
//     }
//   };

//   const goToNextSlide = () => {
//     if (currentSlide === Math.ceil(filteredData.length / 2.5) - 1) {
//       setCurrentSlide(0);
//       setTranslateValue(0);
     
//     } else {
//       setCurrentSlide(currentSlide + 1);
//       setTranslateValue(translateValue - cardWidth * 2.5);
//     }
//   };

//   return (
//     <div className="card-carousel">
//       <div
//         className="card-carousel-wrapper"
//         style={{
//           transform: `translateX(${translateValue}%)`,
//           transition: "transform ease-out 0.45s",
          
//         }}
//       >
//        {filteredData.map((item) => (
//           <Card data={item.card} />
//         ))}
//       </div>
//       <div className="btn">
//       <button className="carousel-prev" onClick={goToPrevSlide}       
      
// >
//         &#60;
        
//       </button>
//       <button className="carousel-next" onClick={goToNextSlide}
//       >
//         &#62;
//       </button>
//       </div>
//     </div>
//   );
// };

// export default CardCarousel;

