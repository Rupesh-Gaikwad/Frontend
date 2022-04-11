import React from 'react'
import Banner from './Banner'
import './css/premium.css'
import { Link } from 'react-router-dom'

function Premium() {
  return (
      <div>
    <div className="go_premium">
        <h2>Premium members get Co-founders 2x as fast on average.</h2>
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
                <Link to="/Premium"><p className="pack_buy_now_btn">Buy Now</p></Link>
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
            <Link to="/Premium_Plus"><p className="pack_buy_now_btn" style={{backgroundColor: "#1A66CA"}}>Buy Now</p></Link>
            </div>
        </div>

    </div>
        <Banner/>
    </div>
  )
}

export default Premium