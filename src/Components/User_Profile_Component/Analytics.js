import React from 'react'
import './css/analytics.css'
import post_impression from './images/post_impression.svg'
import search_appearance from './images/search_appeared.svg'
import who_viewed from './images/who_viewed_profile.svg'

function Analytics() {
  return (
    <div className="analytics_component">
        <h2>Analytics</h2>
        <div className="analytics_cards_container">
        <div className="analytics_card">
                <img src={who_viewed} alt="who viewed"/>
                <h2>40</h2>
                <p>Know who viewed your Profile</p>
        </div>
        <div className="analytics_card">
                <img src={post_impression} alt="who viewed"/>
                <h2>20</h2>
                <p>Know who viewed your Profile</p>
        </div>
        <div className="analytics_card">
                <img src={search_appearance} alt="who viewed"/>
                <h2>30</h2>
                <p>Know who viewed your Profile</p>
        </div>
        </div>
    </div>
  )
}

export default Analytics