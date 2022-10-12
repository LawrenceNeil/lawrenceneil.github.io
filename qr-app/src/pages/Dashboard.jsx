import React from 'react'
import MainDash from '../components/MainDash'
import Rightbar from '../components/Rightbar'
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
  return (
    <>
      <div className="App">
        <div className="AppGlass">
          <Sidebar />
          <MainDash />
          <Rightbar />
        </div>
      </div>
    </>
  )
}

export default Dashboard