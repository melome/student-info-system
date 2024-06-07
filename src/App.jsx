import { useState } from 'react'
import './App.css'

import Dashboard from './features/Dashboard/Dashboard'
import Navbar from './features/Navbar/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Dashboard />
    </>
  )
}

export default App
