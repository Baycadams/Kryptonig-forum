import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import './output.css'
import Signup from './Signup'
import Mailbox from './Mailbox'
import Successpage from './Successpage'
import PersonalInformation from './PersonalInformation'
import PI2 from './PI2'
import PI21 from './PI21'
import Document1 from './Document1'

function App() {

  return (
    <> 
      <Router>
        <Routes>
          <Route path='/' element={<Signup />}/>
          <Route path='/:userID' element={<Mailbox />}/>
          <Route path='/successful' element={<Successpage />}/>
          <Route path='/kyc/personalinfo' element={<PersonalInformation />}/>
          <Route path='/kyc/personalinfo/2' element={<PI2 />}/>
          <Route path='/kyc/personalinfo/verify-otp' element={<PI21 />}/>
          <Route path='/kyc/documentverification' element={<Document1 />}/>


        </Routes>
      </Router>
    </>
  )
}

export default App
