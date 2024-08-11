import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import KApp from './KeeperApp/KApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <KApp />
  </StrictMode>,
)
