
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Axiosinterceptors } from './Axiosinterceptors/Axios.interceptors.tsx'
import { BrowserRouter, Router } from 'react-router-dom';

Axiosinterceptors();


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)