import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PostsList from './pages/PostsList'
import About from './pages/About'
import './App.css'

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/posts' element={<PostsList />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
