import React from "react";
import Laptop_pic from"../Assates/Watch_pic";
import MAin from "../All_use/All"
import"./Watch.css";
import QQ1 from "../Assates/QQ4.jpg";
import QQ2 from "../Assates/ab.jpg";


const Watchs =() =>{
    return(
<div>
     
       <img src={QQ1} id="fdfd" alt="sorry"></img>

        <div className="container_row">
            {
                Laptop_pic.map((pic,index)=>(
                    <MAin key={index} img={pic.img} name={pic.name} new_price={pic.new_price} old_price={pic.old_price}/>
                      ))
            }
          </div> 
          <img src={QQ2} id="fdfd" alt="sorry"></img>

        </div>)}
export default Watchs;