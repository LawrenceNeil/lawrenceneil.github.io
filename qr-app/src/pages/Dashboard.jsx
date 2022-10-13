import React from 'react'
import { Outlet } from 'react-router-dom'
import Rightbar from '../components/Rightbar'
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
  return (
    <>
      <div className="App">
        <div className="AppGlass">
          <Sidebar />
          <Outlet />
          <Rightbar />
        </div>
      </div>
    </>
  )
}

export default Dashboard