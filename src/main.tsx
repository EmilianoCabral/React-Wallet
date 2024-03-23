
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Axiosinterceptors } from './Axiosinterceptors/Axios.interceptors.tsx'

Axiosinterceptors();


ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <App />
  </>
)