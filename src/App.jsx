import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Portfolio from './pages/portfolio/PortfolioItem'
import Contact from './pages/contact/Contact'

// Define router with nested routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
])

// Render the router using RouterProvider
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
