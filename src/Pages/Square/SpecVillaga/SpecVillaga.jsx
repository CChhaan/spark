import React from 'react'
import classes from '../css/SpecVillaga.module.css'
import SpecVillageTopNavBar from './SpecVillageTopNavBar/SpecVillageTopNavBar'
import ComSearchBar from '../ComSearchBar/ComSearchBar'

const SpecVillaga = () => {
  return (
    <div className={classes.SpecVillaga}>
      <SpecVillageTopNavBar />
      <ComSearchBar />
    </div>
  )
}

export default SpecVillaga
