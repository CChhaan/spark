import React from 'react'
import classes from '../css/Index.module.css'
import {NavLink} from 'react-router-dom'

const Index = () => {
  return (
    <div className={classes.Index}>
      <NavLink to="/square/village">特色村 &gt;</NavLink>
      <NavLink to="/square/commute">交流广场 &gt;</NavLink>
    </div>
  )
}

export default Index
