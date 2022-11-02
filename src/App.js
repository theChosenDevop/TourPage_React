import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={true} component/>
        </Routes>
      </Router>
    </div>
  )
}

export default App