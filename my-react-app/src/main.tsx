import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { UserContext } from './context/UserContext.tsx' 
import { AuthProvider } from "./context/AuthProvider";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
    <UserContext.Provider value="Sairam">
    <App />
    </UserContext.Provider>
</AuthProvider>
  </StrictMode>,
)
