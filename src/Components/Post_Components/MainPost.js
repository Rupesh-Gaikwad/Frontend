import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllPost from './Post Navs/AllPost'
import YourPost from './Post Navs/YourPost'
import AddNewPost from './Post Navs/AddNewPost'
import PostNav from './PostNav'

export default function MainPost() {
  return (
    <div className="main-post-area">
      <BrowserRouter>
      <PostNav/>
      <Routes>
          <Route path="/" element={<AllPost/>}/>
          <Route path="AllPost" element={<AllPost/>} />
          <Route path="YourPost" element={<YourPost />} />
          <Route path="AddNewPost" element={<AddNewPost />} />
      </Routes>
    </BrowserRouter>
  </div>

  )
}
