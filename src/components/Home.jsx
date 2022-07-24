import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './NavBar'
import "./home.css"

function Home() {
  return (
    <div className="home">
        <Sidebar/>
        <div className='homeContainer'>
            <Navbar/>
            <hr/>
        </div>
    </div>
  )
}

export default Home