import React from 'react'
import MainPost from './MainPost'
import Sidebar from './Sidebar'
import './css/main.css'

export default function Main() {
  return (
    <main>
        <Sidebar/>
        <hr className="main_divider"/>
        <MainPost/>        
    </main>
  )
}
