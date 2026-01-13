import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import Home from './Components/Pages/Home/Home.jsx'
import About from './Components/Pages/About/About.jsx'
import Contact from './Components/Pages/ContactUs/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
