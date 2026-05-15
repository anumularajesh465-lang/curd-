
import { createHashRouter,RouterProvider } from "react-router-dom"
import RootLayour from "./components/RootLayour"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import Technologies from "./components/Technologies"
import Java from "./components/Java"
import Nodejs from "./components/Nodejs"
import Vue from "./components/Vue"
function App() {
  let routerobj=createHashRouter([
    {
      path:'/',
      element:<RootLayour/>,
      children:[
        {
          path:'',
          element:<Home/>
        },
        {
          path:'login',
          element:<Login/>

        },
        {
          path:'register',
          element:<Register/>
        },
        {
          path:'technologies',
          element:<Technologies/>,
          children:[
            {
              path:'java',
              element:<Java/>
            },
            {
              path:'vue',
              element:<Vue/>
            },
           
            {
              path:'nodejs',
              element:<Nodejs/>
            }
          ]
        }
      ]
    }
  ])
  return (
    <div>
   <RouterProvider router={routerobj} /> 
    </div>
  )
}

export default App