import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Attendance from './components/dashboard/Attendance'
import Record from './components/dashboard/Record'
import Settings from './components/dashboard/Settings'
import Student from './components/dashboard/Student'
import MainDash from './components/MainDash'
import { GlobalStyle } from './components/style/Global.styled'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/dashboard' element={<Dashboard/>} >
            <Route path='' element={<MainDash />} />
            <Route path='attendance' element={<Attendance />} />
            <Route path='student' element={<Student />} />
            <Route path='record' element={<Record />} />
            <Route path='settings' element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App