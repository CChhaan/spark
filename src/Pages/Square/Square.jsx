import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './Index/Index'
import SpecVillaga from './SpecVillaga/SpecVillaga'
import Commute from './Commute/Commute'

const Square = () => {
  return (
    <div>
      <Routes>
        <Route path='/village' element={<SpecVillaga />}></Route>
        <Route path='/*' element={<Index />}></Route>
        <Route path='/commute' element={<Commute />}></Route>
      </Routes>
    </div>
  )
}

export default Square
