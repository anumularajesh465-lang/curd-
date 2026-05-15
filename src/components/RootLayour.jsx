import React from 'react'
import Navigation from './Navigation'
import { Outlet} from 'react-router'

function RootLayour() {
  return (
    <div>
        <Navigation />
        <div className="container">

            <Outlet />
        </div>
    </div>
  
  )
}

export default RootLayour