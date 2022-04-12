import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Banner from './Banner'
import './css/subscription.css'

function Subscription(props) {

    const [planType, setPlanType] = useState("monthly");

    const togglePlan = ()=>{
        if(planType === "yearly"){
            setPlanType("monthly");
        }
        else{
            setPlanType("yearly");
        }
    }
  return (
    <div className="subscription_container">
        {props.type === "premium_plus" ? <Banner sub_type="plus"/> : <Banner/>}
        <div className="subscription">

            {/* Pack Information */}
            <div className="pack_info_container">
                <div className="sub_pack_name">
                    <p>Premium {props.type === "premium_plus" ? "Plus" : ""} Pack Subscription</p>
                </div>
                <div className="sub_pack_feature">
                    <p>Anoynmous, start your free searching for co-founder today!</p>
                </div>
            </div>

            {/* Step 1 */}

            <div className="step_1">
                <p className="step_number">STEP 1</p>
                <p className="confirm_billing_inst">Confirm your billing cycle</p>
                <div className="choose_plan">
                    {/* Monthly Plan */}
                    <div className="monthly_plan">
                        <input type="radio" id="monthly" name="plan_duration" value="monthly" checked={planType === "monthly" ? true : false} onClick={togglePlan}/>
                        <div className="monthly_plan_info">
                            <h2>Monthly</h2>
                            <p>1-month free trial then pay only ₹99* / month</p>
                        </div>
                    </div>
                    {/* Yearly Plan */}
                    <div className="yearly_plan">
                        <input type="radio" id="yearly" name="plan_duration" value="yearly" checked={planType === "yearly" ? true : false} onClick={togglePlan}/>
                        <div className="yearly_plan_info">
                            <h2>Yearly</h2>
                            <p>1-month free trial then pay only ₹3,200* / Yearly</p>
                        </div>
                    </div>
                </div>

                {/* Plan total after free trail */}

                <div className="plan_total_container">
                    <div className="total_plan_rate">
                        <p id="total_plan_rate_p1">{planType === "monthly" ? "Monthly" : "Yearly"} after free trial</p>
                        <p id="total_plan_rate_p2">{planType === "monthly" ? "₹299* / month" : "₹3,220* / year"}</p>
                    </div>
                    <div className="total_divider_line"></div>
                    <div className="todays_total">
                        <p id="todays_total_p1">Today's Total</p>
                        <p id="todays_total_p1">₹0</p>
                    </div>
                    <p id="trail_begin_inst">Your free trial begins on March 30, 2022 and will end on April 30, 2022. You can cancel anytime before April 30, 2022 to avoid being charged and we’ll send an email reminder 7 days before the trial ends.</p>
                </div>
            </div>

            {/* Step 2 */}

            <div className="step_2">
                <p className="step_number">STEP 2</p>
                <p className="confirm_billing_inst">Payment</p>

                {/* Payment info. form */}

                <div className="payment_form">
                    <div>
                    <label for="f_name">First Name</label>
                    <input type="text" id="f_name"/>
                    </div>

                    <div>
                    <label for="l_name">Last Name</label>
                    <input type="text" id="l_name"/>
                    </div>

                    <div>
                    <label for="card_num">Credit or debit card number</label>
                    <input type="number" id="card_num"/>
                    </div>

                    <div className="card_extra_info">
                     <div>   
                        <label for="exp_date">Expiration Date</label>
                        <input type="date" id="exp_date"/>
                    </div>
                    <div>
                        <label for="security_code">Security Code</label>
                        <input type="number" id="security_code"/>
                    </div>
                    </div>
                    <div>
                        <label for="country">Country</label>
                        <input type="text" id="country"/>
                    </div>

                    <div>
                        <label for="postal_code">Postal Code</label>
                        <input type="number" id="postal_code"/>
                    </div>

                    <Link to="#"><button id="confirm_order_btn" type="submit">Confirm Order</button></Link>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Subscription