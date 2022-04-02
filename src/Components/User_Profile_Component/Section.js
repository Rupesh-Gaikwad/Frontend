import React from 'react'
import './css/section.css'
import edit from './images/edit.svg'
import Posts from '../Post_Components/Posts'
import UserPolls from './UserPolls'

export default function Section(props) {
  return (
    <div className="section">
        <div className="sec_title">
          <p>{props.sec_title}</p>
          <img src={edit} alt="edit"/>
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
    </div>
  )
}
