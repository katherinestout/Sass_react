import React from "react";
import Footer from "./../../Components/Footer"
import Services from "./Services"
import chante from "./../../Images/chante8.jpg"


//import "./Schedule.css";

const Schedule = () => (
  <div className="jumbotron jumbotron-fluid SchedCard">
  <div>
  <img src = {chante} alt={"idk"} className="chantee"/>
<Services/>

</div>


  <Footer />
  </div>


);

export default Schedule;
