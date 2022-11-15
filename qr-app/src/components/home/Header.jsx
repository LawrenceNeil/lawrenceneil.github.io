import React from 'react'
import { Link } from 'react-router-dom'
import { Headers } from '../style/Home.styled'

const Header = () => {
  return (
    <Headers>
      <nav>
        <div className="logo">
          <Link to="/"><span className='logoname'>Logo</span></Link>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </Headers>
  )
}

export default Header