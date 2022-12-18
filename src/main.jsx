import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-gradient-to-br from-amber-400 to-orange-300'>
      <App />
    </div>
  </React.StrictMode>
)
