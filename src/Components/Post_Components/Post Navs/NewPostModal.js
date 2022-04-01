import React, { useEffect, useRef } from 'react'
import '../css/newpostmodal.css'
import { useNavigate } from 'react-router-dom';

export default function NewPostModal() {

const navigate = useNavigate();
  let menuRef = useRef();
  const handleSubmit = (event) =>{
    alert('Post published successfully!');
    // event.preventDefault();
  }

  useEffect( () => {
      let handler = (event) => {
        if( !menuRef.current.contains(event.target)){
          navigate('/AllPost');
        }
      };
      document.addEventListener("mousedown", handler);

      return () => {
        document.removeEventListener("mousedown", handler);
      };
  });

  return (
    <div className="bg_modal">
      <div ref={menuRef} className="newpost_modal">
          <h1>Add Your Requirement</h1>
          <form onSubmit={handleSubmit}>
            <div className="requirement_container">
              <textarea id="requirement_textarea" placeholder="Requirement" rows="5" maxLength={300}></textarea>
              <span id="requirement_desc">0/300 Character</span>
            </div>
            <div className="additional_container">
            <textarea id="tags" placeholder="Tags (Press enter to add multiple keywords)" rows={1} maxLength={100}/>
            <select className="drp_menu" id="business" name="business">
              <option label="Looking for"></option>
              <option value="First Choice">First Choice</option>
              <option value="Second Choice">Second Choice</option>
              <option value="Third Choice">Third Choice</option>
              <option value="Fourth Choice">Fourth Choice</option>
            </select>       
            <input id="submit_post" type="submit" value="Post"/>
            </div>
          </form>
      </div>
    </div>
  )
}
