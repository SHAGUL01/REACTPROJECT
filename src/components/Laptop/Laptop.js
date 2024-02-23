import React from "react";
import Laptop_pic from"../Assates/Laptop_pic";
import MAin from "../All_use/All"
import "../All.css"
import "./Laptop.css"
import we from "../Assates/we (1).jpg";
import d1 from "../Assates/r22.jpg";



const Laptop=()=>{
    return(<div>


          <div>
           <img id="wee1" src={we} ></img>
           </div>



        <div className="container_row">
            {
                Laptop_pic.map((pic,index)=>(
                    <MAin key={index} img={pic.img} name={pic.name} new_price={pic.new_price} old_price={pic.old_price}/>
                      ))
            }
           </div>
           <div> 
           
            <img id="wee2" src={d1} ></img>
            
=======
          
            <img id="wee2" src={d1} ></img>
           </div>



        </div>);}
export default Laptop;
