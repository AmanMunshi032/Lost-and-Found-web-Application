import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Router/Router.jsx'
import Authprovider from './Context/Authprovider.jsx'
import { ToastContainer } from 'react-toastify'
import { Darktheme } from './Components/Darkthem/Darktheme.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Darktheme>
      <Authprovider>
        <RouterProvider router={router} />
           <ToastContainer />  
    </Authprovider>
  </Darktheme>
  </StrictMode>,
)
