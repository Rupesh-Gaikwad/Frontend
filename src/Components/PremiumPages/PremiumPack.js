import React from 'react'
import { Link } from 'react-router-dom'
import Banner from './Banner'
import './css/premium_pack.css'
import little_things_work from './images/little_things_work.png'
import tick from './images/tick.svg'

function PremiumPack() {
  return (
    <div>
    <div className="premium_pack_outer_component">
    <div className="premium_pack_component">
        <div className="left">
            <h2>Premium Pack Feature</h2>
            <p id="tag_for_cofounders">Premium members get Co-founders 2x as fast on average.</p>
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
        </div>
    </div>
    <div className="premium_pack_extra_info">
    <Link to="#" id="premium_free_trial_btn">Start free trail today</Link>
            <p id="premium_pack_price">After your free month, pay as little as ₹99* / month</p>
            <p id="cancel_trail_info">Cancel anytime. We'll remind you 7 days before your trial ends.</p>
    </div>
    </div>
    <Banner/>
    </div>
  )
}

export default PremiumPack