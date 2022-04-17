import { Route, Routes } from 'react-router-dom'
import './app.css'
import About from './pages/About/About'
import Blog from './pages/Blog/Blog'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Header from './pages/Shared/Header/Header'
import NotFound from './pages/NotFound/NotFound'
import Footer from './pages/Shared/Footer/Footer'
import Checkout from './pages/Checkout/Checkout'
import RequireAuth from './pages/RequireAuth'
import Register from './pages/Register/Register'

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route
          path='/checkout'
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
