import React from 'react'
import classes from '../css/ComTopNavBar.module.css'
import { Config, Home } from '@icon-park/react'
import { NavLink } from 'react-router-dom'

const ComTopNavBar = () => {
  return (
    <div className={classes.ComTopNavBar}>
      <NavLink to="/home/homepage" className={classes.left}>
        <Home theme="outline" size="20" fill="#4a4a4a" />
        首页
      </NavLink>
      <div className={classes.center}>
        交流广场
      </div>
      <div className={classes.back}>
        <Config theme="outline" size="24" fill="#4a4a4a" />
      </div>
    </div>
  )
}

export default ComTopNavBar
