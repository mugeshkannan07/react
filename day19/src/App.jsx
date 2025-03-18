import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Restapi } from './components/Restapi'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Restapi/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
