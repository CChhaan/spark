import React from 'react'
import classes from '../css/SpecVillageTopNavBar.module.css'
import { Home } from '@icon-park/react'
import {NavLink} from 'react-router-dom'

const SpecVillageTopNavBar = () => {
  return (
    <div className={classes.SpecVillageTopNavBar}>
      <div className={classes.left}>
        <Home theme="outline" size="20" fill="#4a4a4a" />
        首页
      </div>
      <div className={classes.center}>
        特色村
      </div>
      <NavLink to={"square"} className={classes.back}>&lt; 返回 </NavLink>
    </div>
  )
}

export default SpecVillageTopNavBar
