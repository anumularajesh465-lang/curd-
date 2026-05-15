import React from 'react'
import { NavLink } from 'react-router'

function Navigation() {
  return (
    <div>Navigation
      <ul className="nav mx-auto navbar-expand-sm">
        <li className="nav-item"><NavLink to=''>Home</NavLink></li>
        <li className="nav-item"><NavLink to='login'>login</NavLink></li>
        <li className="nav-item"><NavLink to='register'>Register</NavLink></li>
        <li className="nav-item"><NavLink to='technologies'>Technologies</NavLink></li>
      </ul>
    </div>
  )
}

export default Navigation