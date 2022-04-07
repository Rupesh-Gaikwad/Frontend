import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/modal.css'
import cross from '../images/delete_cross.svg'


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
    </div>
  </div>
  )
}

export default EducationModal