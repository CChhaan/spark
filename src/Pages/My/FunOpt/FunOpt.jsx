import React from 'react'
import classes from '../css/FunOpt.module.css'
import { NavLink } from 'react-router-dom'

const FunOpt = () => {
  const func = ["联系客服", "意见反馈", "关于我们", "把应用推荐给其他人"]

  return (
    <ul className={classes.FunOpt}>
      {func.map((item) => (
        <li>
          <NavLink>
            {item}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default FunOpt
