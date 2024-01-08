import React,{useState} from "react";
import c from "../photos/carImg6.jpg"




function ChooseCar() {

     const [showThankYou, setShowThankYou] = useState(false);

    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        setShowThankYou(true);
      }
    };
    return <div className="choose-car">
        <img src={c} alt="" className="choose-car-img" />
        <h1 className="choose-car-h1">Rent a Car</h1>
        <p className="choose-car-p">is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.</p>
        
        <div className="choose-car-cards">
            <div className="choose-car-card-1">
            <h6>pickup location</h6>
                <input type="text" id="username" name="username" placeholder="pickup location" />
            </div>
            <div className="choose-car-card-2">
            <h6>dropdown location</h6>
                <input type="text" id="username" name="username" placeholder="dropdown location" />
            </div>

            <div className="choose-car-card-3">
            <h6>pickup date</h6>
                <label htmlFor="pickupDate"></label>
          <input type="date" id="pickupDate" name="pickupDate" />
            </div>
            <div className="choose-car-card-4">
            <h6>pickup time</h6>
                <label htmlFor="pickupDate"></label>
          <input type="time" id="pickupDate" name="pickupDate" />
            </div>

            <div className="choose-car-card-5">
            <h6>drop off date</h6>
                <label htmlFor="pickupDate"></label>
          <input type="date" id="pickupDate" name="pickupDate" />
            </div>
            <div className="choose-car-card-6">
            <h6>drop off time</h6>
                <label htmlFor="pickupDate"></label>
          <input type="time" id="pickupDate" name="pickupDate" />
            </div>
            
            <div className="pick-up-car">
          <h6>select a car</h6>
          <label htmlFor="pickupDate"></label>
          <input
            type="text"
            id="pickupcar"
            name="pickupcar"
            placeholder="choose a car"
            onKeyDown={handleKeyPress}
          />
          <div>
            {showThankYou && <p>Thank you for your order! Hope to see you soon.</p>}
                </div>
                <div className="info">
                    <h5 >For more information scrool down </h5>
                    <svg xmlns="http://www.w3.org/2000/svg" height="46" width="86" viewBox="0 0 384 512"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                    
                    
                </div>
        </div>

        </div>
       
       
        
  </div>;
}
export default ChooseCar;
