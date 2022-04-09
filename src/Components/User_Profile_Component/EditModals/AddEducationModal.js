import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/modal.css'
import cross from '../images/delete_cross.svg'

function AddEducationModal(props) {

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
            <p>Add Education</p>
            <img src={cross} alt="delete" onClick={exitModal}/>
          </div>
          <div className="modal_divider_line about_me_divider_margin"></div>
          <div className="add_education_form_container">
              <form>
                  <div className="input_field_line">
                    <label>School/College</label>
                    <input type="text" placeholder="Name of your School/College"/>
                  </div>
                  <div className="input_field_line">
                    <label>Field of Study</label>
                    <input type="text" placeholder="Bachlor's Degree"/>
                  </div>
                  <div className="dates_container">
                    <div className="input_field_line" >
                        <label>Start Date</label>
                        <input type="date"/>
                    </div>
                    <div className="input_field_line">
                        <label>End Date</label>
                        <input type="date"/>
                    </div>
                  </div>
                  <div className="input_field_line">
                  <label>Description</label>
                  <textarea type="text" placeholder="Write brief desription"/>
                  </div>
                  <input type="text" placeholder="Add link" />
                  <div id="save_education_btn">
                      <p>Save</p>
                  </div>


              </form>
          </div>
        </div>
      </div>
      )
}

export default AddEducationModal