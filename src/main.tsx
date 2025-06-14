import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@hexlet/testing-task-manager'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {App()}
  </React.StrictMode>
)
console.log('Root:', document.getElementById('root'))


// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
