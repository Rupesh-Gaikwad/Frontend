import React from 'react'
import user_profile from './images/current_user.png'
import smile from './images/smile.png'
import send from './images/send.png'
import like from './images/like.png'
export default function CommentSection() { 

  return (
    <div className="comment_section">
      <div>
      <div className="add_comment">
        <img src={user_profile} alt="user"/>
        <form>
          <textarea type="text" rows={1} placeholder="Add a Comment"/>
          <div className="emoji_n_send">
            <img id="smile_emoji" src={smile} alt="smile"/>
            <input id="send_button" type="image" src={send} alt="send"/>
          </div>
        </form>
      </div>
      </div>
      <div className="comments_on_post">
        <img src={user_profile} alt="user_profile"/>
        <div className="comment">
          <div className="comment_user_info">
              <div className="comment_user_details">
                <p id="comment_user_name">Eva Adams</p>
                <p id="comment_time"> 2w ...</p>
              </div>
              <p id="original_comment_content">Comment</p>
          </div>
        <div className="comment_options">
          Like &nbsp;&nbsp;<img src={like} alt="likes"/>&nbsp;&nbsp;<span id="likes">{2}</span> &nbsp;| &nbsp;Reply
        </div>
        </div>
      </div>

      <div className="reply_on_comment show">
      <img src={user_profile} alt="user_profile"/>
        <div className="comment">
          <div className="comment_user_info">
              <div className="comment_user_details">
                <p id="comment_user_name">Eva Adams</p>
                <p id="comment_time"> 2w ...</p>
              </div>
              <p id="original_comment_content">Comment</p>
          </div>
      </div>
    </div>
    </div>


  )
}

