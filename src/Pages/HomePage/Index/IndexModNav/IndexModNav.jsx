import React, { useState } from 'react'
import classes from '../css/IndexModNav.module.css'
import badget from '../../../../Assets/homepic/badget.png'
import classify from '../../../../Assets/homepic/class.png'
import discount from '../../../../Assets/homepic/discount.png'
import hot from '../../../../Assets/homepic/hot.png'
import souvenior from '../../../../Assets/homepic/souvenior.png'
import activity from '../../../../Assets/homepic/activity.png'
import IndexModNavIcon from '../../../../Components/IndexModNavIcon/IndexModNavIcon'

const IndexModNav = () => {

  const navData = [
    {
      icon: classify,
      name: "商品分类"
    }, {
      icon: hot,
      name: "人气榜"
    }, {
      icon: discount,
      name: "特价商品"
    }, {
      icon: souvenior,
      name: "纪念文创"
    }, {
      icon: activity,
      name: "活动促销"
    }, {
      icon: badget,
      name: "成就勋章"
    }
  ]

  // 伴随滚动条的逻辑代码
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (event) => {
    let { scrollLeft } = event.target;
    scrollLeft /= 3.8
    setScrollPosition(scrollLeft);
  };

  return (
    <div className={classes.IndexModNav}>
      <ul onScroll={handleScroll}>
        {navData.map((item) => (
          <li>
            <IndexModNavIcon
              icon={item.icon}
              name={item.name} />
          </li>
        ))}
      </ul>
      {/* 和导航栏绑定的滚动条 */}
      <div className={classes.scroll}>
        <div className={classes.scrollInner} style={{ transform: `translateX(${scrollPosition}px)` }}></div>
      </div>
    </div>
  )
}

export default IndexModNav
