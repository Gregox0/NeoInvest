import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import App from './App.jsx'
import ConteMais from './pages/ConteMais.jsx'
import { AuthProvider } from "./context/AuthContext.jsx"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/ConteMais',
    element: <ConteMais />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> 
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
