import React from 'react'
import './css/premium_pack.css'
import Banner from './Banner'
import little_things_work from './images/little_things_work.png'
import tick from './images/tick.svg'
import { Link } from 'react-router-dom'


function PremiumPlusPack() {
  return (
    <div>
    <div className="premium_pack_outer_component">
    <div className="premium_pack_component">
        <div className="left">
            <h2>Premium Plus Pack Feature</h2>
            <p id="tag_for_cofounders">Premium members get Co-founders 4x as fast on average.</p>
            <img src={little_things_work} alt="study"/>
        </div>

        <div className="right">
            <p className="right_head">CONTACT CO-FOUNDERS & GET NOTIFIED</p>
            <div className="premium_feature">
                <img src={tick} alt="tick"/>
                25 Email per month.
            </div>
            <div className="premium_feature">
                <img src={tick} alt="tick"/>
                Who viewed your profile in 90 days.
            </div>
            <div className="premium_feature">
                <img src={tick} alt="tick"/>
                Unlimites profile browsing.
            </div>
            <div className="premium_feature">
                <img src={tick} alt="tick"/>
                Personalised email for co-founders you are Searching for.
            </div>
            <div className="premium_feature">
                <img src={tick} alt="tick"/>
                We will Remind you FAQs.
            </div>
        </div>
    </div>
    <div className="premium_pack_extra_info">
    <Link to="#" id="premium_free_trial_btn">Start free trail today</Link>
            <p id="premium_pack_price">After your free month, pay as little as ₹299* / month</p>
            <p id="cancel_trail_info">Cancel anytime. We'll remind you 7 days before your trial ends.</p>
    </div>
    </div>
    <Banner bg={{background: "linear-gradient(93.54deg, #BA8E41 -1.13%, #FDEA7E 37.88%, #F6F0B7 49.48%, #FCEC8D 63.18%, #C0994A 100.08%)", color: "#452612"}}/>
    </div>
  )
}

export default PremiumPlusPack