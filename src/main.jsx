import '@fontsource/poppins/400.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'

import Sidebar from './components/sidebar.jsx'
import Navbar from './components/navbar'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

<div className='h-screen flex overflow-hidden'>

<Sidebar/>
<div className='flex-1 p-'>
    <Navbar />
    <App />
</div>

</div>
  </StrictMode>,
)
