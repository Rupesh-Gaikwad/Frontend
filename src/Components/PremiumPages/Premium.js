import React from 'react'
import offer_bg from './images/offer_banner_bg.svg'
import './css/premium.css'
import star from './images/Star.svg'

function Premium() {
  return (
    <div className="go_premium">
        <h2>Premium members get Co-founders <br/> 2x as fast on average.</h2>
        <p>Start your free 1-month trial today. Cancel anytime. We’ll send you a reminder 7 days before your trial ends.</p>
        <div className="packs_container">
            <div className="premium_pack_container">
                <div className="pack_detail_container">
                <p className="pack_name">Premium Pack</p>
                <p className="pack_rates">Rs. 99 / month *</p>
                <ul>
                    <li>25 Email per month</li>
                    <li>Who viewed your profile in 50 days.</li>
                    <li>Unlimites Profile Browsing</li>
                </ul>
                </div>
                <p className="pack_buy_now_btn">Buy Now</p>
            </div>
            <div className="premium_plus_pack_container">
            <div className="pack_detail_container">
                <p className="pack_name" style={{color: "#1A66CA"}}>Premium Plus Pack</p>
                <p className="pack_rates">Rs. 299 / month *</p>
                <ul>
                    <li>50 Email per month</li>
                    <li>Who viewed your profile in 50 days.</li>
                    <li>Unlimites Profile Browsing</li>
                    <li>Personalised email for co-founders you are Searching for.</li>
                    <li>We will Remind you FAQs.</li>
                </ul>
            </div>
            <p className="pack_buy_now_btn" style={{backgroundColor: "#1A66CA"}}>Buy Now</p>
            </div>
        </div>

        <div className="banner">
            <img src={offer_bg} alt="offer bg"/>
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
    </div>
  )
}

export default Premium