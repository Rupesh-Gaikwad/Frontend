import React, { useEffect, useRef } from 'react'
import '../css/modal.css'
import { Link, useNavigate } from 'react-router-dom';
import edit_user_info from '../images/edit_user_info.png'
import setting from '../images/setting.png'
import logout from '../images/logout.png'
import current_user from '../images/user_profile_pic.png'

function UserInfoModal(props) {

    const navigate = useNavigate();
    let menuRef = useRef();
    const updateModal = props.updateModalState;

    useEffect( () => {
        let handler = (event) => {
          if(!menuRef.current.contains(event.target)){
            // props.updateModalState();
            updateModal();
            document.body.style.overflow = "auto";
            navigate('/UserProfile');
          }
        };
        document.addEventListener("mousedown", handler);
  
        return () => {
          document.removeEventListener("mousedown", handler);
          document.body.style.overflow = "auto";
        };
    }, [menuRef, updateModal, navigate])
    return (
        <div className="bg_modal">
          <div ref={menuRef} className="user_info_modal">
            <div className="user_header">
                <img src={current_user} alt="user"/>
                <div className="user_info">
                    <p id="current_username">Megan Fox</p>
                    <p id="user_designation">Cofounder of Hubspot</p>
                </div>
            </div>
            <div className="modal_divider_line about_me_divider_margin"></div>    

            <div className="user_modal_options">
                <Link to="#">   
                <div className="option">
                    <img src={edit_user_info} alt="edit"/>
                    <p>Edit Your Profile</p>
                </div>
                </Link>
                <Link to="/UserSettings">
                <div className="option">
                    <img src={setting} alt="edit"/>
                    <p>Settings</p>
                </div>
                </Link>
                <Link to="#">
                <div className="option">
                    <img src={logout} alt="edit"/>
                    <p>Logout</p>
                </div>
                </Link>
            </div>     
            </div>
        </div>
    )
}

export default UserInfoModal