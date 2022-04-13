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
import PremiumPack from '../PremiumPages/PremiumPack'
import PremiumPlusPack from '../PremiumPages/PremiumPlusPack'
import Subscription from '../PremiumPages/Subscription'
import Settings from '../User_Profile_Component/Settings'
import DeactivationAndDeletion from '../User_Profile_Component/DeactivationAndDeletion'
import RequestVerification from '../User_Profile_Component/RequestVerification'

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
          <Route path="GoPremium" element={<Premium/>} />
          <Route path="Premium" element={<PremiumPack/>}/>
          <Route path="Premium_Plus" element={<PremiumPlusPack/>}/>
          <Route path="Premium_Subscription" element={<Subscription type="premium"/>}/>
          <Route path="Plus_Subscription" element={<Subscription type="premium_plus"/>}/>
          <Route path="UserSettings" element={<Settings/>}/>
          <Route path="Ac_Deactivation_and_Deletion" element={<DeactivationAndDeletion/>}/>
          <Route path="Verification" element={<RequestVerification/>}/>
      </Routes>
    </BrowserRouter>
  </div>

  )
}
