import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/modal.css'
import cross from '../images/delete_cross.svg'
import { Link } from 'react-router-dom';

function AboutMeModal(props) {
    const navigate = useNavigate();
    let menuRef = useRef();
    const [aboutMe, setAboutMe] = useState('');
    const [charCount, setCharCount] = useState(0);

    /* Handles on change */

    const handleOnchange = (event)=>{
        setAboutMe(event.target.value);
        setCharCount(event.target.value.length);
    }

    const exitModal = ()=>{
      props.updateModal();
      navigate('/UserProfile');
    }

    useEffect( () => {
        let handler = (event) => {
          if(!menuRef.current.contains(event.target)){
            props.updateModal();
            navigate('/UserProfile');
          }
        };
        document.addEventListener("mousedown", handler);
  
        return () => {
          document.removeEventListener("mousedown", handler);
        };
    }, [menuRef])

  return (
      <div className="bg_modal">
        <div ref={menuRef} className="about_me_modal">
          <div className="about_header">
            <p>Edit About</p>
            <img src={cross} alt="delete" onClick={exitModal}/>
          </div>
          <div className="modal_divider_line about_me_divider_margin"></div>
          <div className="about_instruction">
            <p>You can write about your years of experience, industry, or skills. People also talk about their achievements or previous job and business experiences.</p>
          </div>
          <div className="about_me_area">
            <textarea value={aboutMe} maxLength={2500} onChange={handleOnchange}/>
          </div>
          <div className="charCounter">{charCount}/2500</div>
          <div className="about_save_btn_container">
            <Link id="about_me_save_btn" to="#">Save</Link>
          </div>
        </div>
      </div>
  )
}

export default AboutMeModal