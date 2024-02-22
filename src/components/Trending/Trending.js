import React, { useState } from 'react';
import ACC from '../Assates/toppicks';
import ACCESSORIES from '../Assates/new_tec';
import All from '../All_use/All';
import "./trending.css";


const Trending = () => {
    const [choosen, setChoosen] = useState("true");

  return (
    <div className="trendingContainer">
        <h1>ACCESSORIES</h1>
        <div className="trendingContainer__title">
            <h4 className={choosen ? "trendingContainer__title--active" : undefined} onClick={()=>setChoosen(true)}>Trending-accessories </h4>
            <h4 className={choosen ? undefined : "trendingContainer__title--active"} onClick={()=>setChoosen(false)}>Top-accessories</h4>
        </div>
        {
            choosen ? (
                <div className="trendingContainer__box">
                    {
                    ACCESSORIES.map((trend) => (
                        <All key={trend.id} img={trend.img} name={trend.name} new_price={trend.new_price} old_price= {trend.old_price}/>
                    ))
                    }
                </div>
            ) : (
                <div className="trendingContainer__box">
                    {
                       ACC.map((trend) => (
                            <All key={trend.id} img={trend.img} name={trend.name} new_price={trend.new_price} old_price= {trend.old_price}/>
                        ))
                    }
                </div>
            )
        }
    </div>
  )
}

export default Trending