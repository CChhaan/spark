import React from 'react'
import classes from '../css/PersonalInfo.module.css'
import avatar from '../../../Assets/my/avatar.jpg'
import lv1 from '../../../Assets/my/等级.png'
import bar from '../../../Assets/my/勋章.png'


const PersonalInfo = () => {
  return (
    <div className={classes.PersonalInfo}>
      <div className={classes.top}>
        <div className={classes.avatar}>
          <img src={avatar} alt="头像" />
        </div>
        <div className={classes.info}>
          <div className={classes.name}>
            小新
          </div>
          <div className={classes.level}>
            <div className={classes.lv1}>
              <img src={lv1} alt="lv1" />
            </div>
            <div className={classes.bar}>
              <img src={bar} alt="勋章" />
              <span>成就勋章</span>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.bottom}>
        <ul>
          <li>
            <span>235</span>
            <span>收藏夹</span>
          </li>
          <li>
            <span>247</span>
            <span>关注店铺</span>
          </li>
          <li>
            <span>300</span>
            <span>喜欢</span>
          </li>
          <li>
            <span>300</span>
            <span>足迹</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PersonalInfo
