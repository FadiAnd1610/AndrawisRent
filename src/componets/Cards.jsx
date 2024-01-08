import React from "react";
import insurance from "../photos/insurance.jpg";
import money from "../photos/goodPrice.jpg";
import family from '../photos/family.jpg'

function Cards() {
  return (
    <div className="cards">
      
      <div className="size">
          <h1 className="">Why Choose Andrawis Rent Car ?</h1>
          </div>
      
      <div className="cards-container">
        

        <div className="cards-1">
          <img className="cards1-img" src={insurance} alt="insurance pic" />
          <h2>Very secure</h2>
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
        </div>

        <div className="cards-1">
          <img className="cards1-img" src={money} alt="insurance pic" />
          <h2>Best Price</h2>
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
        </div>

        <div className="cards-1">
          <img className="cards1-img" src={family} alt="insurance pic" />
          <h2>familiality</h2>
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
        </div>

       
      </div>
    </div>
  );
}

export default Cards;
