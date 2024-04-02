import React from 'react'
import classes from '../css/Bottom.module.css'
import { HomeOutlined, CommentOutlined, StarOutlined, UserOutlined, VideoCameraFilled } from '@ant-design/icons'
import BottomItem from './BottomItem/BottomItem'
import { NavLink } from 'react-router-dom'

const Bottom = () => {

  // 图标
  const homeIcon = HomeOutlined
  const commuteIcon = CommentOutlined
  const colletIcon = StarOutlined
  const person = UserOutlined

  return (
    <div className={classes.Bottom}>
      <ul>
        <li>
          <BottomItem component={homeIcon} to={""}>首页</BottomItem>
        </li>
        <li>
          <BottomItem component={commuteIcon} to={"square"}>广场</BottomItem>
        </li>
        <li >
          {/* 短视频导航项 */}
          <NavLink to="/shortVideo" className={classes.playIcon}>
            <div className={classes.Icon}><VideoCameraFilled /></div>
            <div>短视频</div>
          </NavLink>
        </li>
        <li>
          <BottomItem component={colletIcon} to={"like"}>收藏</BottomItem>
        </li>
        <li>
          <BottomItem component={person} to={"my"}>我的</BottomItem>
        </li>
      </ul>
    </div>
  )
}

export default Bottom

