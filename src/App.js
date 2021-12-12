import React from 'react'
import Home from './Compo/Home'
import Navbar from './Compo/Navbar'
import { ToastContainer } from 'react-toastify';


const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <ToastContainer/>
    </div>
  )
}

export default App
