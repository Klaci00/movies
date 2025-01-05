import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout/Layout'
/*import './Cascade Style Sheets/VenueDetail.css';
import './Cascade Style Sheets/Nagyterem.css';
import './Cascade Style Sheets/Ticketcount.css';*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout />
  </StrictMode>,
)
