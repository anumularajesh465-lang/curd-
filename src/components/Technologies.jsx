import React from 'react'
import { Outlet,NavLink } from 'react-router'

function Technologies() {
  return (
    <div>Technologies
      <div className="container">
        <ul className="nav mx-auto navbar-expand-sm">
          <li className="nav-item m-3"> <NavLink to='java'>Java</NavLink> </li>
          <li className="nav-item m-3"> <NavLink to='nodejs'>Nodejs</NavLink> </li>
          <li className="nav-item m-3"> <NavLink to='vue'>Vue </NavLink> </li>
        </ul>
      </div>
     <Outlet/>
    </div>
  )
}

export default Technologies