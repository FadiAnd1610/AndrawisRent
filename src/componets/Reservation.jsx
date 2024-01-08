import React from "react";
import carImage from "../photos/carImage2.jpg";
import carImg from "../photos/caiImage8.jpg";


function Reservation() {
  return (
    <div className="reservation">
      <div className="container">
        <img className="carImg1 scale-on-hover1" src={carImage} alt="car image" />
        <div className="information">
          <div className="info2">

          <h1>About</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
            </p>
            </div>

          <img className="carImg8 scale-on-hover" src={carImg} alt="car image" />
        </div>
      </div>
    </div>
  );
}

export default Reservation;
