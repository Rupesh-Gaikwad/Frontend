import React from 'react'
import star from './images/Star.svg'
import './css/premium.css'


function Banner(props) {
  return (
    <div className="banner" style={props.sub_type === "plus" ? {background: "linear-gradient(93.54deg, #BA8E41 -1.13%, #FDEA7E 37.88%, #F6F0B7 49.48%, #FCEC8D 63.18%, #C0994A 100.08%)", color: "#452612"} : {}}>
            <div className="banner_content">
                <p id="early_cust">Early Customers will get</p>
                <div className="tagline_in_stars">
                    <img src={star} alt="star"/>
                    <p id="offer_heading">Extra 2 months excess for free</p>
                    <img src={star} alt="star"/>
                </div>
                <p id="offer_period">Offer for limited period only</p>
            </div>
        </div>
  )
}

export default Banner