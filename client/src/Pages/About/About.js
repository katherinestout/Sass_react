import React from "react";
import AboutForm from "./AboutForm";
import Footer from "../../Components/Footer";
import profile from "./../../Images/profile.jpg";


const About = () => (
<div>

<div className="AboutCard card">
<img src = {profile} alt={"me"} className="me"/>
Hi my name is Katie and I am a photographer from MD.
Send me a message and I will get back to you ASAP!
</div>
  <div className="Aboutform">
<AboutForm/>

<Footer/> 
</div>

</div>
);

export default About;