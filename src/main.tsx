import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import logo from './imports/_EA7A32E7-9DFC-493C-8B79-4AF038894C97_-Photoroom.png'

const favicon = document.createElement('link')
favicon.rel = 'icon'
favicon.type = 'image/png'
favicon.href = logo
document.head.appendChild(favicon)

// React reads window.$$typeof across frames to verify element integrity.
// In cross-origin iframe environments (e.g. Figma Make preview) the browser
// blocks that access with a SecurityError. Suppress it so it doesn't surface
// as an unhandled error in the console.
window.addEventListener('error', (e) => {
  if (e.error instanceof DOMException && e.error.name === 'SecurityError') {
    e.preventDefault()
  }
}, true)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
