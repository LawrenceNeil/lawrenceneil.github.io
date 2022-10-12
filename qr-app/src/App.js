import React from 'react'
import { GlobalStyle } from './components/style/Global.styled'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Dashboard />
    </>
  )
}

export default App