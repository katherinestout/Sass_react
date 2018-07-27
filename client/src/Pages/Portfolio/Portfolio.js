import React from "react";
import Footer from "../../Components/Footer";
import katiedit from "./../../Stylesheets/PageStyle/Portfolio/Photos/1katiedit.jpg";
import cat from "./../../Stylesheets/PageStyle/Portfolio/Photos/cat1.jpg";
import emily from "./../../Stylesheets/PageStyle/Portfolio/Photos/emily5.jpg";
import erin from "./../../Stylesheets/PageStyle/Portfolio/Photos/erin17.jpg";
import catt from "./../../Stylesheets/PageStyle/Portfolio/Photos/cat2.jpg";
import gabbye from "./../../Stylesheets/PageStyle/Portfolio/Photos/gabbye3.jpg";
import kate from "./../../Stylesheets/PageStyle/Portfolio/Photos/K7.jpg";
import katetwo from "./../../Stylesheets/PageStyle/Portfolio/Photos/K11.jpg";
import katethree from "./../../Stylesheets/PageStyle/Portfolio/Photos/katie8.jpg";
import kitty from "./../../Stylesheets/PageStyle/Portfolio/Photos/kitty4.jpg";
import KH from "./../../Stylesheets/PageStyle/Portfolio/Photos/KH8.jpg";

const Portfolio = () => (
<div>
  <div className="jumbotron">
 <div className ="img-container port">

<img src = {katiedit} alt={"idk"} className="katiedit portfolio"/>
<img src = {gabbye} alt={"idk"} className="gabbye portfolio"/>
<img src = {kate} alt={"idk"} className="kate portfolio"/>
<img src = {cat} alt={"idk"} className="cat portfolio"/>
<img src = {katetwo} alt={"idk"} className="katetwo portfolio"/>
<img src = {emily} alt={"idk"} className="emily portfolio"/>
<img src = {erin} alt={"idk"} className="erin portfolio"/>


<img src = {katethree} alt={"idk"} className="katethree portfolio"/>


<img src = {KH} alt={"idk"} className="KH portfolio"/>
<img src = {catt} alt={"idk"} className="catt portfolio"/>
<img src = {kitty} alt={"idk"} className="kitty portfolio"/>

    </div>
  
</div> 
<Footer/>
</div>
);

export default Portfolio;