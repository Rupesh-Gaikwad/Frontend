import React from 'react'
import Card from './Card';
import './css/header.css';
import post from './images/dark_post.png';
import polling from './images/polling_light.png'
import chat from './images/chat_light.png'
import connect from './images/connect_light.png'
import people from './images/people_light.png'

export default function Header() {
  return (
    <>
        <header>
          {/* for bif screens PC and Tabs*/}
            <div className="box">
                <Card title="Pitch to us" content="We're always on the lookout 
                for new and innovative ideas. 
                We'd like to hear from you."/>
                <Card title="Crowdfunding" content="Start an online fundraising campaign for your startup. Join now to understand the
                ins and outs of obtaining funds from investors."/>
                <Card title="Join our
                Angel Network" content="Bring your company idea to the attention of active international investors.
                Mentoring and market access on a worldwide scale."/>
            </div>

            {/* For mobile devices */}
            <div className="cart">
              <div className="cart_item active_mobile">
                <img src={post} alt="post"/>
                <p>Post</p>
              </div>
              <div className="cart_item">
                <img src={people} alt="post"/>
                <p>Manage Network</p>
              </div>
              <div className="cart_item">
                <img src={connect} alt="post"/>
                <p>Connections</p>
              </div>
              <div className="cart_item">
                <img src={chat} alt="post"/>
                <p>Chat Room</p>
              </div>
              <div className="cart_item">
                <img src={polling} alt="post"/>
                <p>Public Polls</p>
              </div>
            </div>
        </header>
        <hr className="header_main_divider"/>
    </>
  )
}
