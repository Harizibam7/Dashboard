import './App.css'

import {SignUp} from "./Components/Auth/SignUp";
import { SignIn } from './Components/Auth/SignIn';
import { Main } from './Components/Main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
      <div className='bg-slate-500 h-screen'>
        <Routes>
          <Route path='/login' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/' element={<Main/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
