import React from 'react'
import CommentSection from '../Post_Components/CommentSection'
import LikeSharePanel from '../Post_Components/LikeSharePanel'
import './css/userpolls.css'

function UserPolls() {
  return (
    <div className="polls_section_container">
    <div className="User_polls_section">
        <p>New business connections today?<span id="user_polls_hashtags">#business#marketing</span></p>
        <div className="connections_box">
            <p id="polls_heading">Are you open to making new business connection today?</p>
            <div className="user_polls_percentage">
                <div className="percentage_container">
                    <div className="actual_percentage" style={{width: "75%"}}>Yes</div>
                </div>
                <div className="percentage_number">
                <p>{75}%</p>
                </div>
            </div>
            <div className="user_polls_percentage">
            <div className="percentage_container">
                    <div className="actual_percentage" style={{width: "15%"}}>No</div>
                </div>
                <div className="percentage_number">
                    <p>{15}%</p>
                </div>
            </div>
            <div className="user_polls_percentage" >
            <div className="percentage_container">
                    <div className="actual_percentage" style={{width: "56%"}}>Depends on who I meet</div>
                </div>
                <div className="percentage_number">
                    <p>{56}%</p>
                </div>
            </div>
            <p id="user_polls_votes">{200} votes. {`Poll closed`}</p>
            <div className="like_share_component">
            <LikeSharePanel/>
            </div>
        </div>
        <p id="total_comments_on_post">34 Comments</p>
        <div id="user_polls_divider"></div>
        <div className="polls_comments_section">
        <CommentSection/>
        </div>        
    </div>
    <button id="polls_see_all_btn">See All</button>
    </div>
  )
}

export default UserPolls
