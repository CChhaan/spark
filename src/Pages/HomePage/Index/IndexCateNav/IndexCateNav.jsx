import React, { useState } from 'react';
import classes from '../css/IndexCateNav.module.css';
import goods from '../../../../Data/goods';
import ProSumShow from '../ProSumShow/ProSumShow';

const IndexCateNav = () => {

  const list = [
    "推荐", "最新", "附近", "水果", "蔬菜", "禽畜牧蛋肉", "水产", "粮油作物"
  ];

  const [type, setType] = useState("推荐");

  const ProductList = (props) => {
    switch (props.type) {
      case "推荐":
        goods.sort(function (a, b) { return b.buyCount - a.buyCount })
        return (<ul>
          {goods.map((item) => (
            <ProSumShow
              name={item.name}
              pic={item.pic}
              price={item.price}
              position={item.position}
              key={item.id}
            />
          ))}
        </ul>)
      case "附近":
        goods.sort(function (a, b) { return b.direction - a.direction })
        return (<ul>
          {goods.map((item) => (
            <ProSumShow
              name={item.name}
              pic={item.pic}
              price={item.price}
              position={item.position}
              key={item.id}
            />
          ))}
        </ul>)
      case "最新":
        goods.sort(function (a, b) { return b.date - a.date })
        return (<ul>
          {goods.map((item) => (
            <ProSumShow
              name={item.name}
              pic={item.pic}
              price={item.price}
              position={item.position}
              key={item.id}
            />
          ))}
        </ul>)
      case "水果":
        const fruit = goods.filter(function (a) { return a.type === type })
        return (<ul>
          {fruit.map((item) => (
            <ProSumShow
              name={item.name}
              pic={item.pic}
              price={item.price}
              position={item.position}
              key={item.id}
            />
          ))}
        </ul>)
      case "蔬菜":
        const veg = goods.filter(function (a) { return a.type === type })
        return (<ul>
          {veg.map((item) => (
            <ProSumShow
              name={item.name}
              pic={item.pic}
              price={item.price}
              position={item.position}
              key={item.id}
            />
          ))}
        </ul>)
      case "禽畜牧蛋肉":
        const egg = goods.filter(function (a) { return a.type === type })
        return (<ul>
          {egg.map((item) => (
            <ProSumShow
              name={item.name}
              pic={item.pic}
              price={item.price}
              position={item.position}
              key={item.id}
            />
          ))}
        </ul>)
      case "水产":
        const fish = goods.filter(function (a) { return a.type === type })
        return (<ul>
          {fish.map((item) => (
            <ProSumShow
              name={item.name}
              pic={item.pic}
              price={item.price}
              position={item.position}
              key={item.id}
            />
          ))}
        </ul>)
      case "粮油作物":
        const rice = goods.filter(function (a) { return a.type === type })
        return (<ul>
          {rice.map((item) => (
            <ProSumShow
              name={item.name}
              pic={item.pic}
              price={item.price}
              position={item.position}
              key={item.id}
            />
          ))}
        </ul>)
      default:
        break;
    }
  }

  return (
    <div>
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
      <div className={classes.product}>
        <ProductList type={type} />
      </div>
    </div>
  );
};

export default IndexCateNav