import React from 'react'
import classes from '../css/ComModNav.module.css'
import IndexModNavIcon from '../../../../Components/IndexModNavIcon/IndexModNavIcon'
import Contacts from '../../../../Assets/CommutePic/contacts.png'
import callLog from '../../../../Assets/CommutePic/callLog.png'
import notice from '../../../../Assets/CommutePic/notice.png'
import trans from '../../../../Assets/CommutePic/trans.png'

const ComModNav = () => {
  const navData = [{
    name: "通讯录",
    icon: Contacts,
  }, {
    name: "通话记录",
    icon: callLog,
  }, {
    name: "官方通知",
    icon: notice,
  }, {
    name: "交易记录",
    icon: trans,
  }]

  return (
    <div className={classes.ComModNav}>
      <ul>
        {navData.map((item) => (
          <li key={item.name}>
            <IndexModNavIcon
              icon={item.icon}
              name={item.name} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ComModNav
