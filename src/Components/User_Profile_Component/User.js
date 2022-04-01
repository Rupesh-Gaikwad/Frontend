import React from 'react'
import user_bg from './images/user_bg.svg'
import user_pic from './images/user_profile_pic.png'
import './css/user.css'
import cam from './images/Vector.png'
import check from './images/check.svg'
import edit from './images/edit.svg'
import cofounder_logo from './images/cofounder_logo.png'
import pol1 from './images/Polygon1.png'
import pol2 from './images/Polygon2.png'
import Section from './Section'




export default function User() {

  const skills = ["Art", "Gentrate Ideas", "Gentrate Ideas", "Gentrate Ideas"];
  const education = [{
    qualification: "Core Business Classes",
    university: "University Name, College Name",
    year: "2012-2013"
  }, 
  {
    qualification: "Master's Management",
    university: "University Name, College Name",
    year: "2010-2012"
  },
  {
    qualification: "Bachelor in Engineering",
    university: "University Name, College Name",
    year: "2006-2010"
  }

]

  return (
    <div className="user_profile_component">
      {/* Use profile picture*/}
        <div className="user_pic_container">
            <img className="user_profile_bg" src={user_bg} alt="user background"/>
            <div className="user_pic_inner_container">
                <img className="user_profile_picture" src={user_pic} alt="user_pic"/>
                <img id="cam" src={cam} alt="cam"/>
            </div>
            <img id="edit_profile_pic" src={edit} alt="edit profile pic"/>
        </div>

        {/* User Info. */}

        <div className="User_user_info">
          <div className="user_left_side">
            <div className="username_container">
              <h2 id="User_username">Megan Fox</h2>
              <img src={check} alt="check"/>
            </div>
            <p id="uni_loc">NY, United States</p>
            <p id="university_name">Student at University of NY</p>
            <div className="social_count">
              <p>843 Followers</p>
              <p>500+ Conections</p>
            </div>
            <div className="choice_btns">
              <p id="try_it_btn">TRY IT FOR FREE</p>
              <p id="buy_plan_btn">BUY SUBSCRIBTION PLAN</p>
            </div>
          </div>

          <div className="user_right_side">
              <img src={edit} alt="edit"/>
              
            <div className="cofounders_hub">
            <div className="founders_logo_container">
              <img id="logo_bg" src={cofounder_logo} alt="cofounder logo"/>
              <img id="pol1" src={pol1} alt="pol 1"/>
              <img id="pol2" src={pol2} alt="pol 2"/>
            </div>
              <p>Co Founder of Hubspot</p>
            </div>
          </div>
        </div>

      <Section sec_title="About me" content="My name is Mehan Fox. I graduated from MIT a month ago. Now, I am looking for my first full-time job. I have been working as a freelance web developer for the last three years and cooperated with several startups. I cannot say with 100% confidence where I see myself in five years or what my big career goal is. The world is changing rapidly, and I don’t have enough professional experience to be certain about such things."/>
      <Section sec_title="Education" content={education}/>
      <Section sec_title="Skills" content={skills}/>
      <Section sec_title="Post" content=""/>
      <Section sec_title="Polls" content=""/>
    </div>
    
  )
}
