import React from 'react'
import classes from '../css/ProSumShow.module.css'

const ProSumShow = (props) => {
  return (
    <div className={classes.ProSumShow}>
      <div className={classes.img}>
        <img src={props.pic} alt={props.name} />
      </div>
      <div className={classes.name}>
        {props.name}
      </div>
      <div className={classes.detail}>
        <div className={classes.price}>￥<span>{props.price}</span>/斤</div>
        <div className={classes.position}>{props.position}</div>
      </div>
    </div>
  )
}

export default ProSumShow
