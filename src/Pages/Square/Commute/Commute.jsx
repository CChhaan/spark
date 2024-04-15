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
    </div>
  )
}

export default Commute
