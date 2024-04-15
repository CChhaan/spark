import React from 'react'
import classes from '../css/IndexModNavIcon.module.css'
import { NavLink } from 'react-router-dom'

const IndexModNavIcon = ({ icon, name }) => {
  return (
    <NavLink>
      <div className={classes.IndexModNavIcon}>
      <img src={icon} alt={name} />
      {name}
      </div>
    </NavLink>
  )
}

export default IndexModNavIcon
