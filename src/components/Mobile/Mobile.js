import React from "react";
import Mobile_pic from "../Assates/Mobile_pic";
import MAin from "../All_use/All";
import "../All.css";
import "./Mobile.css";
import rrr from "../Assates/1 (9).jpg";
import eee from "../Assates/1 (10).jpg";


const Mobile =() =>{
    return(
        <div>

           <div>
           <img id="wee" src={rrr} ></img>
           </div>


        <div className="container_row">
            {
                Mobile_pic.map((pic,index)=>(
                    <MAin key={index} img={pic.img} name={pic.name} new_price={pic.new_price} old_price={pic.old_price}/>
                ))
            }
         </div>
    

         <div>
           <img id="wee" src={eee} ></img>
           </div>


        </div>);}
export default Mobile;

