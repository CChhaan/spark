import React, { useState } from 'react'
import classes from "../css/VidCateNav.module.css"
import videos from '../../../../Data/video.js'
import VidSumDisplay from '../VidSumDisplay/VidSumDisplay.jsx'


const VidCateNav = () => {

  const list = [
    "推荐", "关注", "附近", "最新"
  ]
  const [type, setType] = useState("推荐")
  const focusVid = videos.filter(function (a) { return a.isFocus === true })

  switch (type) {
    case "推荐":
      videos.sort(function (a, b) { return b.likes - a.likes })
      break;
    case "附近":
      videos.sort((function (a, b) { return b.direction - a.direction }))
      break;
    case "最新":
      videos.sort((function (a, b) { return b.time - a.time }))
      break;
    default:
      break;
  }

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
        <ul>
          {type === "关注" ? focusVid.map((item) => (
            <VidSumDisplay
              key={item.id}
              name={item.name}
              cover={item.cover}
              avatar={item.avatar}
              poster={item.poster}
              likes={item.likes}
              position={item.position} />
          )) : videos.map((item) => (
            <VidSumDisplay
              key={item.id}
              name={item.name}
              cover={item.cover}
              avatar={item.avatar}
              poster={item.poster}
              likes={item.likes}
              position={item.position} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default VidCateNav
