import React from 'react'
import classes from "../css/HomePage.module.css"
import HomePTopNav from './HomePTopNav/HomePTopNav'
import { Route, Routes } from 'react-router-dom'
import ShortVideo from './ShortVideo/ShortVideo'
import Index from './Index/Index'

const HomePage = () => {
  return (
    <div className={classes.HomePage}>
      <HomePTopNav />
      <Routes>
        <Route path='/home/' element={<Index />}></Route>
        <Route path='/*' element={<Index />}></Route>
        <Route path='/home/shortvideo' element={<ShortVideo />}></Route>
      </Routes>
    </div>
  )
}

export default HomePage
