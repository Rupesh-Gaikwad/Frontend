import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/modal.css'
import cross from '../images/delete_cross.svg'
import { Link } from 'react-router-dom';


function SkillsModal(props) {
    const navigate = useNavigate();
    let menuRef = useRef();

    const exitModal = ()=>{
        props.updateModal();
        navigate('/UserProfile');
      }

    useEffect( () => {
        let handler = (event) => {
          if( !menuRef.current.contains(event.target)){
            props.updateModal();
            navigate('/UserProfile');
          }
        };
        document.addEventListener("mousedown", handler);
  
        return () => {
          document.removeEventListener("mousedown", handler);
        };
    })

  return (
    <div className="bg_modal">
    <div ref={menuRef} className="about_me_modal">
      <div className="about_header">
        <p>Add Skills</p>
        <img src={cross} alt="delete" onClick={exitModal}/>
      </div>
      <div className="modal_divider_line about_me_divider_margin"></div>
      <div className="my_skills"> 
        {props.skills.map((skill)=>{
            return <p>{skill}</p>
        })}
      </div>
      <div className="skill_input_container">
        <input type="text"/>
      </div>
      <div className="about_save_btn_container">
        <Link id="about_me_save_btn" to="#">Save</Link>
      </div>
    </div>
  </div>
  )
}

export default SkillsModal