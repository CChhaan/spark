import React, { useState } from 'react';
import classes from '../css/IndexCateNav.module.css';

const IndexCateNav = () => {

  const list = [
    "推荐", "最新", "附近", "水果", "蔬菜", "禽畜牧蛋肉", "水产", "粮油作物"
  ];

  const [type, setType] = useState("推荐");

  return (
    <div className={classes.IndexCateNav}>
      <div className={classes.nav}>
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
    </div>
  );
};

export default IndexCateNav