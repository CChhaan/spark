import React from 'react'
import classes from '../css/IndexModNavIcon.module.css'

const IndexModNavIcon = ({icon,name}) => {
  return (
    <div className={classes.IndexModNavIcon}>
      <img src={icon} alt={name} />
      {name}
    </div>
  )
}

export default IndexModNavIcon
