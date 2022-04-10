import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllPost from './Post Navs/AllPost'
import YourPost from './Post Navs/YourPost'
import AddNewPost from './Post Navs/AddNewPost'
import User from  '../User_Profile_Component/User'
import Navbar from './Navbar'
import Post from './Post'
import AboutMeModal from '../User_Profile_Component/EditModals/AboutMeModal'
import AddEducationModal from '../User_Profile_Component/EditModals/AddEducationModal'
import Premium from '../PremiumPages/Premium'

export default function MainPost() {
  return (
    <div className="main-post-area">
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/*" element={<Post/>}>
            <Route index element={<AllPost/>}/>
            <Route path="AllPost" element={<AllPost/>} />
            <Route path="YourPost" element={<YourPost />} />
            <Route path="AddNewPost" element={<AddNewPost />} />
          </Route>
          <Route path="UserProfile/*" element={<User/>}>
            <Route path="edit_about_me" element={<AboutMeModal/>}/>
            <Route path="add_education" element={<AddEducationModal/>}/>
          </Route> 
          <Route path="GoPremium/" element={<Premium/>} />
      </Routes>
    </BrowserRouter>
  </div>

  )
}
