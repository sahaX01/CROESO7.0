import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Eventio from './Components/Eventio/Eventio'
import Member from './Components/Member/Member'

const ErrorPage = () => (
  <div>
    <h1>Oops! Something went wrong.</h1>
    <p>Please try refreshing the page or contact support.</p>
  </div>
)

const path = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar/><Home /></>,
    errorElement: <ErrorPage />
  },
  {
    path: "/home",
    element: <><Navbar/><Home /></>
  },
  {
    path: "/about",
    element: <><Navbar/><About /></>
  },
  {
    path: "/event",
    element: <><Navbar/><Eventio /></>
  },
  {
    path: "/member",
    element: <><Navbar/><Member /></>
  }
])
const App = () => {
  return (
    <div>
      <RouterProvider router={path} />
    </div>
  )
}

export default App
