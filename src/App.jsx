import { useState } from 'react'

import './App.css'
import { Nav } from './components/Nav';
import { Home } from './components/Pages/home';
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <div>
        <Nav></Nav>
        <Home></Home>
      </div>
    </>
  )
}

export default App
