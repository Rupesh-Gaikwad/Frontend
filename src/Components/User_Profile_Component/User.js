import React, { useState } from 'react'
import user_bg from './images/user_profile_background.svg'
import user_pic from './images/user_profile_pic.png'
import './css/user.css'
import cam from './images/Vector.png'
import check from './images/check.svg'
import edit from './images/edit.svg'
import cofounder_logo from './images/cofounder_logo.png'
import pol1 from './images/Polygon1.png'
import pol2 from './images/Polygon2.png'
import Section from './Section'
import UserInfoModal from './EditModals/UserInfoModal'
import { Link } from 'react-router-dom'
import Services from './Services'
import Analytics from './Analytics'
import SubscriptionValidation from './SubscriptionValidation'




export default function User() {

  const [userModalOpen, setUserModalOpen] = useState(false);

  const updateModal = () =>{
    setUserModalOpen(!userModalOpen);
    document.body.style.overflow = "hidden";
  }

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

const isSubscriber = true;

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

        {isSubscriber && <SubscriptionValidation/>}

        {/* User Info. */}

        <div className="User_user_info">
          <div className="user_left_side">
            <div className="username_container">
              <h2 id="User_username">Megan Fox</h2>
              <img src={check} alt="check"/>
            </div>
            <p id="uni_loc">NY, United States</p>
            <p id="university_name">Student at University of NY</p>
          </div>

          <div className="user_right_side">
              <img id="edit_user_info" src={edit} alt="edit" onClick={updateModal}/>
              
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

      <div className="social_n_choice_btns">
        <div className="social_count">
              <p>843 Followers</p>
              <Link to="/TryForFree"><p id="try_it_btn">TRY IT FOR FREE</p></Link>
        </div>
        <div className="choice_btns">
              <p>500+ Conections</p>
              <Link to="/GoPremium"><p id="buy_plan_btn">BUY SUBSCRIBTION PLAN</p></Link>
        </div>
      </div>  

      <Services/>

      <Analytics/>

      <Section id="edit_about_me" sec_title="About me" content="My name is Mehan Fox. I graduated from MIT a month ago. Now, I am looking for my first full-time job. I have been working as a freelance web developer for the last three years and cooperated with several startups. I cannot say with 100% confidence where I see myself in five years or what my big career goal is. The world is changing rapidly, and I don’t have enough professional experience to be certain about such things." />
      <Section id="edit_education" sec_title="Education" content={education} />
      <Section id="edit_skills" sec_title="Skills" content={skills} />
      <Section id="edit_posts" sec_title="Post" content="" />
      <Section id="edit_polls" sec_title="Polls" content="" />
      {userModalOpen && <UserInfoModal updateModalState={updateModal}/>}
    </div>
    
  )
}
