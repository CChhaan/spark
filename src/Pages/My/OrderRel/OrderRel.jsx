import React from 'react'
import classes from '../css/OrderRel.module.css'
import { Comment, Commodity, Transporter, Wallet, Workbench } from '@icon-park/react'
import { NavLink } from 'react-router-dom'

const OrderRel = () => {
  const icons = [{
    name: "待付款",
    icon: <Wallet theme="outline" size="24" fill="#4a4a4a" strokeWidth={3} />
  }, {
    name: "待发货",
    icon: <Commodity theme="outline" size="24" fill="#4a4a4a" strokeWidth={3} />
  }, {
    name: "待收货",
    icon: <Transporter theme="outline" size="24" fill="#4a4a4a" strokeWidth={3} />
  }, {
    name: "待评价",
    icon: <Comment theme="outline" size="24" fill="#4a4a4a" strokeWidth={3} />
  }, {
    name: "退款/售后",
    icon: <Workbench theme="outline" size="24" fill="#4a4a4a" strokeWidth={3} />
  }]

  return (
    <div className={classes.OrderRel}>
      <div className={classes.top}>
        <h2>我的订单</h2>
        <span>查看全部 &gt;</span>
      </div>
      <div className={classes.bottom}>
        <ul>
          {icons.map((item) => (
            <li>
              <NavLink>
                <i>{item.icon}</i>
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default OrderRel
