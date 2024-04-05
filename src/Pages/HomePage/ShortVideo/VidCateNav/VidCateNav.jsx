import React, { useState } from 'react'
import classes from "../css/VidCateNav.module.css"

const VidCateNav = () => {

  const list = [
    "推荐", "关注", "附近", "最新"
  ]
  const [type, setType] = useState("推荐")

  return (
    <div>
      <div className={classes.VidCateNav}>
        <ul>
          {list.map((item) => (
            <li
              key={item}
              onClick={() => setType(item)}
              className={`${item === type ? classes.typeli : ""}`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className={classes.Videos}>
        
      </div>
    </div>
  )
}

export default VidCateNav
