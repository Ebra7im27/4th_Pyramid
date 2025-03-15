import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home'
import SignUp from './Pages/Sign Up/SignUp';
import LogIin from './Pages/Log In/LogIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
