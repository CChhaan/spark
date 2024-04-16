import React from 'react'
import MyTopNavBar from './MyTopNavBar/MyTopNavBar'
import classes from '../css/My.module.css'
import PersonalInfo from './PersonalInfo/PersonalInfo'
import OrderRel from './OrderRel/OrderRel'
import FunOpt from './FunOpt/FunOpt'
import { NavLink } from 'react-router-dom'

const My = () => {
  return (
    <div className={classes.My}>
      <MyTopNavBar />
      <PersonalInfo />
      <OrderRel />

      <div className={classes.AdressManage}>
        <NavLink>
        收货地址管理
        </NavLink>
      </div>

      <FunOpt />
    </div>
  )
}

export default My
