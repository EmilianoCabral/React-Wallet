import { Home } from './pages/Home'
import { LogIn } from './pages/LogIn'

import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'




function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LogIn/>} />
        <Route path='' element={<>not fount</>} />
        <Route path='/Home' element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
