import './App.css'

import {SignUp} from "./Components/Auth/SignUp";
import { SignIn } from './Components/Auth/SignIn';
import { Main } from './Components/Main/Main';
function App() {

  return (
    <>
      <div className='bg-slate-500 h-screen'>
          {/* <SignUp/> */}
        {/* <SignIn/> */}
        <Main/>
      </div>
    </>
  )
}

export default App
