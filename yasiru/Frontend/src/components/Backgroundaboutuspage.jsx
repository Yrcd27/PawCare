import React from "react";
import catImage from "../Images/Enhanced_Cat_Image.png"; 
import catImageRotated from "../Images/Enhanced_Cat_Image_Rotated.PNG"; 


const Backgroundaboutuspage = () => {
  return (
    <section id = "BackgroundAboutUspage">
    <div className="cat-image left-cat">
        <img src={catImage} alt="Cat" />
    </div>
    <div className="about-text1">
        <h3>
        "Whiskers and purrs bring warmth to life.
        Let’s care for them with love and devotion."
        </h3>
    </div>
    <div className="cat-image right-cat">
        <img src={catImageRotated} alt="Cat" />
    </div>
 
  </section> 

   
    
  );
};

export default Backgroundaboutuspage;
