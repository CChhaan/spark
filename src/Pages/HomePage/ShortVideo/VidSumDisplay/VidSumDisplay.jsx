import React from 'react'
import classes from '../css/VidSumDisplay.module.css'
import { Bloom, Local, LocalTwo } from '@icon-park/react'

const VidSumDisplay = (props) => {
  return (
    <div className={classes.VidSumDisplay}>
      <li>
        <div className={classes.cover}>
          <div className={classes.pos}>
          <LocalTwo theme="outline" size="16" fill="#4a4a4a" strokeWidth={3}/>
            {props.position}
          </div>
          <img src={props.cover} alt="" />
        </div>

        <h2 className={classes.name}>
          {props.name}
        </h2>

        <div className={classes.bottom}>
          <span>
            <img src={props.avatar} alt="" />
            {props.poster}
          </span>
          <span>
            <Bloom theme="outline" size="16" fill="#4a4a4a" strokeWidth={3} />
            {props.likes}
          </span>
        </div>
      </li>
    </div>
  )
}

export default VidSumDisplay
