import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Books from './pages/Books/Books'
import AdibDetail from './pages/AdibDetail/AdibDetail'
import BooksDetail from './pages/BooksDetail/BooksDetail'
import { useContext, useEffect } from 'react'
import { Context } from './Context/Context'
import Login from './pages/Login/Login'

function App() {
  let {setSearch} = useContext(Context)
  let location = useLocation().pathname
  const navigate = useNavigate()
  useEffect(()=> {
    setSearch('')
    if(window.localStorage.getItem('token') !== 'qwerty'){
      navigate('/login')
    }
  }, [location])
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/book' element={<Books/>}/>
        <Route path='/adib-detail/:id' element={<AdibDetail/>}/>
        <Route path='/book-detail/:slug' element={<BooksDetail/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
