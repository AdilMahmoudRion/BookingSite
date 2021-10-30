import React, { useEffect, useState } from "react";
import Hotel from "../Hotel/Hotel";
import './Hotels.css';

const Hotels = () => {
  const [hotels, setHotel] = useState([]);

  useEffect(() => {
    fetch("https://gentle-mountain-63376.herokuapp.com/addHotel")
      .then((res) => res.json())
      .then((data) => {
        setHotel(data);
      });
  }, []);

  

  return (
    <div>
      <div className="Hotels container">
        {hotels.map((hotel) => (
          <Hotel key={hotel._id} hotel={hotel}></Hotel>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
