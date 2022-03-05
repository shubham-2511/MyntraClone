import React from "react";

export const SingleProductPage4 = ({ details }) => {
  console.log(details);
  return (
    <>
      <h2>PRODUCT DETAILS</h2>
      <br />
      <div>
        <ul>
          {details.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
      <br />
      <br />
      <div>
        <h2>Features</h2> <br />
        <ul>
          <li>Athleisure T-shirt can be paired with tracks, khakis or jeans</li>
          <li>Style: Round Neck</li>
          <li>Sleeve: Short Sleeves</li>
          <li>Colour: Yellow</li>
          <li>Print: Typography</li>
          <li>Fit: Regular</li>
        </ul>
      </div>
    </>
  );
};
