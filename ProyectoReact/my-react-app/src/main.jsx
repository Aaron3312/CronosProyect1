import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Act1 from './Act1.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Act1 />
    <App />
  </StrictMode>,
)
