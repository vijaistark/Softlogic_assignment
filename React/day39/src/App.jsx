import { useState } from 'react'
import './App.css'
import Student from './Components/Student'
import LoginStatus from './Components/LoginStatus'
import Result from './Components/Result'
import Product from './Components/Product'
import AgeCheck from './Components/Agecheck'


function App() {

  return (
    <div>
      <Student />
      <LoginStatus />
      <Result />
      <Product />
      <AgeCheck />

    </div>
  )
}

export default App
