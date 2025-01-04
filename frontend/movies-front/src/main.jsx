import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Cascade Style Sheets/index.css'
import Layout from './Layout/Layout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <Layout />
  </StrictMode>,
)
