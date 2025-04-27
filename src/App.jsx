import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PostsList from './pages/PostsList'
import About from './pages/About'
import NavBar from './layout/navBar'
import Prodotti from './pages/Prodotti'

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element={<NavBar />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<About />} />
            <Route path='/posts' element={<PostsList />} />
            <Route path='/posts/:id' element={<Prodotti />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
