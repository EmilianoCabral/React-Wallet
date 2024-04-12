import { Home } from './pages/Home'
import { LogIn } from './pages/LogIn'

import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Usercreate } from './Components/Usercreate'
import { Transfermoney } from './Components/Transfer.money'
import { Depositmoney } from './Components/Deposit.money'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'





function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route  path='/' element={<LogIn />} />
          <Route path='/Usercreate' element={<Usercreate />} />
          <Route path='' element={<>not fount</>} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Transfermoney' element={<Transfermoney />} />
          <Route path='/Depositmoney' element={<Depositmoney />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
