import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import './index.css'
import About from './Components/About/About.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import GitHub from './Components/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children: [
      {
        path:"",
        element:<Home/>
      },
      {
        path:"About",
        element:<About/>
      },
      {
       path:"Contact",
       element:<Contact/>
      },
      {
       path:"Github",
       element:<GitHub/>
      },
      {
        path:"user/:userid",
        element:<User/>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
