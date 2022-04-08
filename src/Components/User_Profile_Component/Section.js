import React, { useState } from 'react'
import './css/section.css'
import edit from './images/edit.svg'
import Posts from '../Post_Components/Posts'
import UserPolls from './UserPolls'
import { Link } from 'react-router-dom'
import AboutMeModal from './EditModals/AboutMeModal'
import EducationModal from './EditModals/EducationModal'
import SkillsModal from './EditModals/SkillsModal'

export default function Section(props) {

  // const [editUserOpen, setEditUser ] = useState(false);
  const [editAboutMeOpen, setEditAboutMe ] = useState(false);
  const [editEducationOpen, setEditEducation ] = useState(false);
  const [editSkillsOpen, setEditSkills ] = useState(false);
  // const [editPostOpen, setEditPost ] = useState(false);
  // const [editEditPolls, setEditPolls ] = useState(false);
  
  const [modalOpen, setModalOpen] = useState(true);

  const getId = (event) =>{

    const currentModalId = event.target.id;
    switch(currentModalId){
      case "edit_about_me":
        setEditAboutMe(true); 
        break;
      case "edit_education":
        setEditEducation(true);
        break;
      case "edit_skills":
        setEditSkills(true);
        break;
      // case "edit_posts":
      //   setEditPost(true);
      //   break;
      // case "edit_polls":
      //   setEditPolls(true);
      //   break;

    }
    setModalOpen(true);

    if(currentModalId !== "edit_posts" && currentModalId !== "edit_polls")
      document.body.style.overflow = "hidden";

  }

  const changeModalState = () =>{
    setModalOpen(!modalOpen);

    /*making all modals invisible */
    setEditAboutMe(false);
    setEditEducation(false);
    setEditSkills(false);
    // setEditPost(false);
    // setEditPolls(false);

    document.body.style.overflow = "auto";
  }

  return (
    <div className="section">
        <div className="sec_title">
          <p>{props.sec_title}</p>
          <Link to={`${props.id}`}><img id={props.id} src={edit} alt="edit" onClick={getId}/></Link>
        </div>
        {props.sec_title === "About me" &&
        ( 
          <div className="about_me_content">
            <p>{props.content}</p>
          </div>
        )
        }

        {props.sec_title === "Education" &&
          ( 
            <div className="User_education">
              <ul>
                {props.content.map((edu) =>{
                  return (
                  <div className="user_qual_main_container"> 
                  <div className="each_qual_container">
                    <li></li> <div className="education_f_l"><div id="user_qual">{edu.qualification}</div> <div id="uni">{edu.university}</div></div>
                  </div>
                  <span id="edu_year">{edu.year}</span>
                  </div>
                  );
                })}
              </ul>
            </div>
          )
        }

        {props.sec_title === "Skills" &&
          ( 
            <div className="skills">
                {props.content.map( (skill) =>{
                  return <p key={skill}>{skill}</p>
                })}
            </div>
          )
        }

        {props.sec_title === "Post" &&
          ( 
            <div className="posts">
                <Posts/>
                <button id="see_all_btn">See All</button>
            </div>
          )
        }

        {props.sec_title === "Polls" &&
          (
            <div>
              <UserPolls/>
            </div>
          )

        }

        {editAboutMeOpen && modalOpen && <AboutMeModal updateModal={changeModalState}/>}
        {editEducationOpen && modalOpen && <EducationModal userEdu={props.content}  updateModal={changeModalState}/>}
        {editSkillsOpen && modalOpen && <SkillsModal skills={props.content} updateModal={changeModalState}/>}


    </div>
  )
}
