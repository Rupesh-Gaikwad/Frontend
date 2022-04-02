import React from 'react'
import like from './images/like.png'
import comment from './images/comment.png'
import share from './images/direct-instagram.png'

function LikeSharePanel() {
  return (
    <div>
        <div className="user_options">
        <div className="likes">
          <img src={like} alt="likes"/><span id="count">3</span> Likes
        </div>
        <div className="comments">
        <img src={comment} alt="likes"/><span id="count"> 34</span>Comments
        </div>
        <div className="share">
        <img src={share} alt="likes"/>Share
        </div>
      </div>
    </div>
  )
}

export default LikeSharePanel