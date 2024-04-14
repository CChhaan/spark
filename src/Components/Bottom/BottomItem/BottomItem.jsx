import React from 'react'

import classes from '../css/BottomItem.module.css'

import { NavLink, useMatch } from 'react-router-dom'

const BottomItem = (props) => {
  // 检查路径
  const match = useMatch(`${props.to}/*`);
  // 检查路径是否匹配
  const isActive = match ? true : false;
  // 路径匹配与否对应不同的类名
  const className = isActive ? classes.containerActive : classes.container

  return (
    // 底部导航每一个导航项
    <div className={className}>
      <NavLink to={props.to}>
        {/* 导航图标 */}
        <div>
          <props.component className={classes.icon} />
        </div>
        {/* 导航文字 */}
        <div className={classes.text}>{props.children}</div>
      </NavLink>
    </div>
  )
}

export default BottomItem
