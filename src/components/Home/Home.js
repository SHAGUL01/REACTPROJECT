import React from "react";
import"./Home.css";
import bn1 from "../Assates/POP.mp4";
import bn2 from "../Assates/aa.jpg";
import bn3 from "../Assates/1 (16).jpg";


import Trending from "../Trending/Trending";

const Home=()=>{

return(<div>


  <div id="DDF">
    <video src={bn1} id="RER"  loop muted autoPlay></video>
       <div id="ASA">
             <center> <h1 id="ddf">GALAXY S23 ULTRA</h1>
              <h1 id="kl">From ₹4583.29/month for 24 months or<br/>₹109999.00</h1></center>
       </div>
  </div>

<div>
  <img id="fddd" src={bn2} ></img>
  <img id="frt" src={bn3} ></img>

</div> 



<div id="ghg">
    <Trending/>
</div> 




    </div>)}
export default Home;