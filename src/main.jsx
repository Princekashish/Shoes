import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Page/Home.jsx'
 
const rout =  createBrowserRouter([
  {path:'/',Component:App,children:[
    {path:'/',Component:Home}
  ]}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={rout}/>
  </StrictMode>,
)
