import React from 'react'
import classes from '../css/villageActivity.module.css'
import VillageActivityProfile from './VillageActivityProfile/VillageActivityProfile'

const VillageActivity = () => {
  return (
    <div className={classes.VillageActivity}>
      <div className={classes.top}>
        <h3>热门活动</h3>
        <span>更多&gt;&gt;</span>
      </div>
      <div className={classes.content}>
        <VillageActivityProfile />
        <VillageActivityProfile />
        <VillageActivityProfile />
        <VillageActivityProfile />
      </div>
    </div>
  )
}

export default VillageActivity
