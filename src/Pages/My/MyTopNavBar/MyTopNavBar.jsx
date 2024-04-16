import React from 'react'
import classes from '../css/MyTopNavBar.module.css'
import { Config } from '@icon-park/react'

const MyTopNavBar = () => {
  return (
    <div className={classes.MyTopNavBar}>
      <h1>个人中心</h1>
      <div className={classes.config}>
        <Config theme="outline" size="24" fill="#4a4a4a" />
        &nbsp;设置
      </div>
    </div>
  )
}

export default MyTopNavBar
