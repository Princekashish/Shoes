import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Page/Home.jsx'
import Listing from './Page/Listing.jsx'
import Productpage from './components/Productpage.jsx'
import CheckOut from './Page/CheckOut.jsx'
 
const rout =  createBrowserRouter([
  {path:'/',Component:App,children:[
    {path:'/',Component:Home},
    {path:'/listing',Component:Listing},
    {path:'/product/:id',Component:Productpage},
    {path:'/product/:id/buy',Component:CheckOut},
  ]}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={rout}/>
  </StrictMode>,
)
