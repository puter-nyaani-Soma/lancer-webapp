import React from 'react';
import './Card.css';

function Card() {
  return (
    <>
    <section className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="container mx-auto">
        <div className="card front-face">
          <header className="flex justify-between items-center">
            <span className="logo">
              {/* <img src="images/logo.png" alt=""   /> */}
              <h5 className="text-white">Master Card</h5>
            </span>
            {/* <img src="images/chip.png" alt="" className="chip" /> */}
          </header>

          <div className="card-details">
            <div className="name-number">
               <h6  className="text-white">Card Number</h6>
              <h5 className="text-white text-lg">8050 2030 3020 5040</h5>
              <h5 className="text-white">Prem Kumar Shahi</h5>
            </div>

            <div className="valid-date">
              <h6 className="text-white">Valid Thru</h6>
              <h5 className="text-white">05/28</h5>
            </div>
          </div>
        </div>

        <div className="card back-face">
          <h6   className="text-white">
            For customer service call +977 4343 3433 or email at
            mastercard@gmail.com
          </h6>
          <span className="magnetic-strip"></span>
          <div className="signature">
            <i className="text-black">005</i>
   </div>
          <h5 className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            maiores sed doloremque nesciunt neque beatae voluptatibus doloribus.
            Libero et  quis magni magnam nihil temporibus? Facere  consectetur
            dolore reiciendis et veniam.
          </h5>
        </div>
      </div>
    </section>
    </>
  );
}

export default Card;
