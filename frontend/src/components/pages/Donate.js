import "./aboutus.css";
import React from "react";
import NavBar from "../layout/Navbar";

const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <br />
      <br />
      <br />

      <div className="about-section">
        <center>
          <h1>Bank Information</h1>
        </center>
      </div>
      <div className="divs">
        <center>
          <h2>Send a Cheque</h2>
          <p>
            Please make cheques payable to 'Snehalaya child adoption Center'
            <br></br>
            and post to: Snehalaya child adoption Center, Survey No 222,
            <br></br>F Block,Deccan Gymkhana,Pune Maharashtra 414141
          </p>
        </center>
        <br />
        <br />
      </div>
      <div className="divs">
        <center>
          <h2>Bank Transfer</h2>
          <p>
            Please instruct your bank to deposit funds to our HDFC account
            <br></br>
            and follow the simple instructions to obtain a tax exemption
            certificate below:
          </p>
        </center>
        <br />
        <br />
      </div>

      <div className="d-flex justify-content-center">
        <div className="card text-center">
          <div className="card-body">
            <p className="card-text">
              For deposits being made in ₹ INR.
              <br></br>
              All Indian deposits qualify for 80G tax exemption.
              <br></br>
              <br></br>
              Bank Name: HDFC
              <br></br>
              <br></br>
              Branch : Qspider
              <br></br>
              Building - A, Opposite Old S T Stand,
              <br></br>
              Deccan, Pune,
              <br></br>
              Maharashtra 414141
              <br></br>
              <br></br>
              Name of Charity : Snehalaya
              <br></br>
              Account Number : 0000000111111 - Savings
              <br></br>
              IFSC code: HDFC0000181
              <br></br>
              MICR number : 414240001
            </p>
          </div>
        </div>
      </div>
      <div className="divs">
        <center>
          <h2>Need Help?</h2>
          <p>
            Need help with your donation? Email us at
            snehalayaadoptioncenter@gmail.com.
            <br></br>
          </p>
        </center>
        <br />
        <br />
      </div>
    </div>
  );
};

export default AboutUs;
