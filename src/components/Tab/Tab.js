import React from "react";
import Tab_pic from"../Assates/Tab_pic";
import MAin from "../All_use/All";
import bn2 from "../Assates/aa.jpg";
import"./Tab.css";


import "../All.css"
const Tab=()=>{

return(<div>

        <img id="gff" src={bn2} alt="sorry" ></img>

       <div className="container_row">
            {
                Tab_pic.map((pic,index)=>(
                    <MAin key={index} img={pic.img} name={pic.name} new_price={pic.new_price} old_price={pic.old_price}/>
                      ))
            }
         </div>



        </div>);}
export default Tab;