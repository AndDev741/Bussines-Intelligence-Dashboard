import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/dashboard'
import Login from './pages/login'
import Register from './pages/register'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </>
  )
}

export default App
