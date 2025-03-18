import React from 'react'
import { FormPage } from './components/FormPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DisplayPage } from './components/DisplayPage'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<FormPage/>}/>
      <Route path='/data' element={<DisplayPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
