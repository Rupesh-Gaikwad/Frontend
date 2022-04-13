import React, { useState } from 'react'
import pen from './images/pen.svg'
import delete_user from './images/delete_user.svg'
import './css/settings.css'
import { Link } from 'react-router-dom'

function Settings() {

    const [editName, setEditName] = useState(false);
    const [editContact, setEditContact] = useState(false);

    let [name, setName] = useState("Megan Fox");
    let [contact_no, setContact] = useState("9898989898");

    const toggleEditName = () =>{
        setEditName(!editName);
        if(!editName)
            document.getElementById('edit_your_name').focus();
    }

    const toggleEditContact = () =>{
        setEditContact(!editContact);
        if(!editContact)
            document.getElementById('edit_your_contact').focus();
    }

    const updateName = (event)=>{
        setName(event.target.value);
    }

    const updateContact = (event)=>{
        setContact(event.target.value);
    }

  return (
    <div className="user_settings_container">
        <h2>Settings</h2>
        <div className="edit_info_section">
            <p className="info_type_title">Name</p>
            <input type="text" id="edit_your_name" className="edit_content" maxLength={50} value={name} onChange={updateName} readOnly={!editName}/>
            <div className="edit_btn_txt" onClick={toggleEditName}>
                <img src={pen} alt="pen" style={editName ? {display: "none"} : {display: "flex"}}/>
                {editName ? "Save" : "Edit"}
            </div>
        </div>

        <div className="edit_info_section">
            <p className="info_type_title">Contact</p>
            <input type="text" id="edit_your_contact" className="edit_content" maxLength={12} value={contact_no} onChange={updateContact} readOnly={!editContact}/>
            <div id="edit_name" className="edit_btn_txt" onClick={toggleEditContact}>
                <img src={pen} alt="pen" style={editContact ? {display: "none"} : {display: "flex"}}/>
                {editContact ? "Save" : "Edit"}
            </div>
        </div>

        <div className="edit_info_section">
            <p className="info_type_title">Deactivation and Deletion</p>
            <Link to="/Ac_Deactivation_and_Deletion">
            <div id="edit_contact" className="edit_btn_txt">      
                <img src={delete_user} alt="pen"/>
                View
                
            </div>
            </Link>
        </div>

        <div className="edit_info_section">
            <p className="info_type_title">Request Verification</p>
            <Link to="/Verification">
            <div className="edit_btn_txt">
                Fill the form
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Settings