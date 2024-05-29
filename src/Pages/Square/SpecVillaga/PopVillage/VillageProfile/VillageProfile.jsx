import React from 'react'
import classes from '../css/VillageProfile.module.css'
import into from '../../../../../Assets/village/右.png'

const VillageProfile = (props) => {
  return (
    <div className={classes.VillageProfile}>
      <div className={classes.img}>
        <img src={props.img} alt={props.name} />
      </div>
      <div className={classes.content}>
        <div className={classes.name}>
          {props.name}
        </div>
        <div className={classes.info}>
          {props.info}
        </div>
      </div>
      <div className={classes.into}>
        <span>进入村落</span>
        <img src={into} alt="" />
      </div>
    </div>
  )
}

export default VillageProfile
