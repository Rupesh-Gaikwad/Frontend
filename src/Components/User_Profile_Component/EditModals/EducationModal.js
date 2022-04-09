import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/modal.css'
import cross from '../images/delete_cross.svg'
import edit from '../images/edit.svg'
import add_edu from '../images/add_edu.svg'
import { Link } from 'react-router-dom';


function EducationModal(props) {
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
        <p>Edit Education</p>
        <img src={cross} alt="delete" onClick={exitModal}/>
      </div>
      <div className="modal_divider_line about_me_divider_margin"></div>

      {props.userEdu.map((edu) =>{
        return (
        <div className="user_education_container">
          <div className="education">
            <p id="qual">{edu.qualification}</p>
            <p id="uni">{edu.university}</p>
            <p id="year">{edu.year}</p>
          </div>
          <img src={edit} alt="edit"/>
        </div>)
      })}
      <Link to="add_education">
      <div className="add_education_btn" onClick={props.addEducation}>
        <img src={add_edu} alt="Add Education"/>
      </div>
      </Link>
    </div>
  </div>
  )
}

export default EducationModal