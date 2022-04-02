import React from 'react'
import user_profile from './images/user.png'
import CommentSection from './CommentSection'
import LikeSharePanel from './LikeSharePanel'
export default function Posts() {
  return (
    <div className="post">
      <div className="user_info_container">
        <img src={user_profile} alt="user"/>
        <div className="user_info">
          <p id="username">Sandeep Kumar</p>
          <p id="post_date">Dec 28, 2021</p>
          <button id="connect_btn">Connect</button>
        </div>
      </div>

      <div className="post_content">
        <p>I am planning to starting a technology & financial startup. If anyone interested pls contact me then we"ll sharing our models and thoughts and check our compatibility.</p>
      </div>

      <div className="post_additionals">
        <p id="user_hashtag">#technology</p>
        <p id="looking_for">Looking For :</p>
        <button>Tech Co founder Developer</button>
      </div>
      <hr/>
      <LikeSharePanel/>
      <hr/>
      <CommentSection/>
    </div>
  )
}
