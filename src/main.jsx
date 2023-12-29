import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
// import { HomePage } from './pages'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './routes/AppRouter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>,
  </BrowserRouter>
)
