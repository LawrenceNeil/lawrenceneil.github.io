import React from 'react'

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="bars">
        iconbar
      </div>

      <div className="Logo">
        <h2 className="LogoName">Logo</h2>
      </div>
      
      <div className="Menu">

        <div className="MenuItem">
          <div className="icon">
            icon
          </div>
          Dashboard
        </div>
        <div className="MenuItem">
          <div className="icon">
            icon
          </div>
          Attendance
        </div>
        <div className="MenuItem">
          <div className="icon">
            icon
          </div>
          Student
        </div>
        <div className="MenuItem">
          <div className="icon">
            icon
          </div>
          Record
        </div>
        <div className="MenuItem">
          <div className="icon">
            icon
          </div>
          Settings
        </div>
        <div className="MenuItem">
          <div className="icon">
            icon
          </div>
          Logout
        </div>

      </div>
    </div>
  )
}

export default Sidebar