import React from 'react'
import classes from '../css/Commute.module.css'
import ComTopNavBar from './ComTopNavBar/ComTopNavBar'
import ComSearchBar from '../ComSearchBar/ComSearchBar'
import ComModNav from './ComModNav/ComModNav'

const Commute = () => {
  return (
    <div className={classes.Commute}>
      <ComTopNavBar />
      <ComSearchBar />
      <ComModNav />
      <div className={classes.no}>
        --- 暂时还没有消息记录 ---
      </div>
    </div>
  )
}

export default Commute
