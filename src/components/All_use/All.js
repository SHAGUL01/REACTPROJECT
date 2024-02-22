import React from "react";
import "./Css.css";

const Main =({img,name,new_price,old_price})=>{
    return(
        <div className="card trendingcard">
            <img src={img} className="card-img-top" id="ASD" alt="sorry"/>
            <div className="card-body trendingcard__text">
            <h4 className="card-title">{name}</h4>
            <div className="trendingcard__rs">
            <p className="card-text">{new_price}</p>
            <p className="card_text trendingcard__rs2">{old_price}</p>
            </div>
            <a href="#" className="btn">Buy now</a>
            <a href="#" className="btn">Add to card</a>
        </div>
        </div>

        
    );
}
export default Main;