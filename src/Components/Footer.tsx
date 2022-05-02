import React, { FunctionComponent } from "react";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <>
      <h1
        style={{
          border: "5px solid rgb(235, 237, 240)",
          fontFamily: "fantasy"
        }}>
        Best Place to Buy Iphone
      </h1>
      <h3>
        Apple Inc. designs, manufactures and markets smartphones, personal
        computers, tablets, wearables and accessories, and sells a variety of
        related services. The Company's products include iPhone, Mac, iPad, and
        Wearables, Home and Accessories. iPhone is the Company's line of
        smartphones based on its iOS operating system.
      </h3>
      <h4>Website is created by Omar Ismail</h4>
    </>
  );
};

export default Footer;
