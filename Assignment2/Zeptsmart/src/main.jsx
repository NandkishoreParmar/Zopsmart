import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppTrafficLight from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppTrafficLight/>
  </StrictMode>,
)
