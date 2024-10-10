import "./aboutus.css";
import React from "react";
import NavBar from "../layout/Navbar";

{
  /*import React from 'react';
import NavBar from '../layout/Navbar'
const About = () => {

  return (
    <div>
    <NavBar/>
    <div className="container">
      <div className="py-4">
        <p><h2>About Us</h2></p>
      <div className="titleHolder">
      <p><h4>The INSIGHTLY software you love</h4></p>
      </div>
     <h5>
     <div className="contentHolder">
    <p>
Snehalaya means 'Home of Love', and was founded in 2020 to provide support for women, children and LGBT communities,
 who have been affected by HIV and AIDS, trafficking, sexual violence, and poverty. We operate in Ahmednagar, 
a town and district in the agricultural region of Maharashtra, India, and provide services to over 15,000 beneficiaries annually.

We are more than an NGO, we are a strong and passionate family, united in the belief that no one should stand alone. 
 Many of our staff first came to us as beneficiaries to use our services. 
 We understand that resilience - the desire to survive - is an extraordinary force.  
A sense of belonging and compassion can nurture even the most destitute and fragile people to not just survive, 
but to thrive in life. </p>
<p>We welcome everyone with an open heart and without prejudice. </p>
 

</div>   
</h5>
       
   </div> 
    </div>
    </div>
  );
};
export default About;*/
}

const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <br />
      <br />
      <br />

      <div className="about-section">
        <center>
          <h1>About Us Page</h1>
        </center>
        <p>
          Snehalaya means 'Home of Love', and was founded in 2020 to provide
          support for childrens. We are a 1-months-old organization that
          supports the adoption community in Karad, MH and provided support to
          over 1000 childrens.
        </p>
        <p>
          We are more than an NGO, we are a strong and passionate family, united
          in the belief that no one should stand alone. Many of our staff first
          came to us as beneficiaries to use our services. We understand that
          resilience - the desire to survive - is an extraordinary force. A
          sense of belonging and compassion can nurture even the most destitute
          and fragile people to not just survive, but to thrive in life.
          <br></br>
          We stand as family..!!
        </p>
        <p>We welcome everyone with an open heart and without prejudice. </p>

        <p>
          We are students of SunBeam Institute of Information Technology Karad.
        </p>
        <p>
          Our Team makes a Portal for Helping Childrens, There is no exercise
          better for the heart than reaching down and lifting people up and we
          are just a medium.
        </p>
      </div>
      <div className="divs">
        <center>
          <h2>Our Team</h2>
        </center>
        <br />
        <br />
        <div className="row">
          <div className="column">
            <div className="card">
              <center>
                <img
                  className="bd-placeholder-img rounded-circle"
                  width="200"
                  height="200"
                  src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png"
                />
              </center>
              <div className="container ">
                <h2>Viraj Hole</h2>
                <p className="title">Student of Qspider</p>
                <p>
                  This is a web based portal if you want any query please Email
                  me.
                </p>
                <p>virajhole7774@gmail.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <center>
                <img
                  className="bd-placeholder-img rounded-circle"
                  width="200"
                  height="200"
                  src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png"
                ></img>
              </center>
              <div className="container">
                <h2>Mayur Jadhav</h2>
                <p className="title">Student of Qspider</p>
                <p>
                  Please Explore our Services of Snehalaya Child Adoption Center
                  portal
                </p>
                <p>mayurjadhav20004@gmail.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <center>
                <img
                  className="bd-placeholder-img rounded-circle"
                  width="200"
                  height="200"
                  src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png"
                ></img>
              </center>
              <div className="container">
                <h2>Mahima Devade</h2>
                <p className="title">Student of Qspider</p>
                <p>
                  Explore our portal service which are helful for you & if you
                  have any query please contact us
                </p>
                <p>mahimadevade@gmail.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <center>
                <img
                  className="bd-placeholder-img rounded-circle"
                  width="200"
                  height="200"
                  src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png"
                ></img>
              </center>
              <div className="container">
                <h2>Kunal Kashid</h2>
                <p className="title">Student of Qspider</p>
                <p>Explore more service and get more knowledge</p>
                <p>kunalkashid@gmail.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
