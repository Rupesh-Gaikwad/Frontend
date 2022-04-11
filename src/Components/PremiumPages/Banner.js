import React from 'react'
import star from './images/Star.svg'
import './css/premium.css'


function Banner(props) {
  return (
    <div className="banner" style={props.bg ? props.bg : {}}>
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