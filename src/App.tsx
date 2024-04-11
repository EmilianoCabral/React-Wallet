import { Home } from './pages/Home'
import { LogIn } from './pages/LogIn'

import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Usercreate } from './Components/Usercreate'



function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<LogIn />} />
            <Route path='/Usercreate' element={<Usercreate />} />
            <Route path='' element={<>not fount</>} />
            <Route path='/Home' element={<Home />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
