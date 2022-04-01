import React, {useState} from 'react'
import post from './images/more.png'
import polling from './images/polling.png'
import chat from './images/chat.png'
import connect from './images/connect.png'
import people from './images/people.png'
import stat from './images/stat.png'
import arrow from './images/dropdown_arrow.png'

export default function Sidebar() {

    const [trendings, setTrendings] = useState(false);
    let hashtags = ['technology', 'startup', 'ai', 'AI', 'developer', 'startups', 'ecommerce', 'tech', 'fintech', 'saas'];

  return (
    <>
    <div className="sidebar">
        <ul>
            <li className="active"><img src={post} alt="posts"/>Post</li>
            <li><img src={people} alt="networks"/>Manage Network</li>
            <li><img src={connect} alt="connections"/>Connections</li>
            <li><img src={chat} alt="chat"/>Chat Room</li>
            <li><img src={polling} alt="polls"/>Public Polls</li>
        </ul>
        <div className="trending">
            <div className="title">
                <img src={stat} alt="stat"/>
                Trending Hashtags
            </div>
            <div className="hashtags">
                {hashtags.map( tag =>{
                    return <p key={tag}>#{tag}</p>
                })}
            </div>
        </div>
    </div>

    <div className="trending_mobile">
        <div className="trending_mobile_head">
            <div className="m_trending_cart">
            <img src={stat} alt="stats"/>
            <p>Trending Hashtags</p>
            </div>
            <div className="arrow_container" style={trendings ? {transform: "rotate(180deg)"} : {transform: "none"}} onClick={()=> setTrendings(!trendings)} >
                <img id="drp_arw" src={arrow} alt="drp_arw"/>
                <img id="drp_arw" src={arrow} alt="drp_arw"/>
            </div>
        </div>
        
        <div className="hashtags" style={trendings ? {display: "flex"} : {display: "none"}}>
                {hashtags.map( tag =>{
                    return <p key={tag}>#{tag}</p>
                })}
        </div>
    </div>
    </>
  )
}
