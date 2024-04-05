// 短视频模块

import React from 'react'
import VidCateNav from './VidCateNav/VidCateNav'
import classes from '../css/ShortVideo.module.css'

const ShortVideo = () => {
  return (
    <div className={classes.ShortVideo}>
      <VidCateNav />
    </div>
  )
}

export default ShortVideo
