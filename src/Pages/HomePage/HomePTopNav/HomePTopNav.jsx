// 顶部导航栏

import React from 'react'
import classes from '../css/HomePTopNav.module.css'
import { NavLink } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons'

const HomePTopNav = () => {
  return (
    <div className={classes.HomePTopNav}>
      {/* logo图标-左 */}
      <NavLink to='/home/homepage'>
        <div className={classes.logo}>
          <h1>
            星火兴农
          </h1>
        </div>
      </NavLink>

      {/* 首页+短视频-中 */}
      <div className={classes.middle}>
        <NavLink to='/home/homepage' className={({ isActive }) => { return isActive ? classes.active : null }}>首页</NavLink>
        <NavLink to='/home/shortvideo' className={({ isActive }) => { return isActive ? classes.active : null }}>短视频</NavLink>
      </div>

      {/* 搜索-右 */}
      <div className={classes.search}>
        <SearchOutlined className={classes.icon} />
        <div className={classes.txt}>搜索</div>
      </div>
    </div>
  )
}

export default HomePTopNav
