import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'reset-css'
import './index.css'
import CustomSlides from './CustomSlides.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomSlides />
  </StrictMode>,
)
