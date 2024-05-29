import React from 'react'
import classes from '../css/SpecVillaga.module.css'
import SpecVillageTopNavBar from './SpecVillageTopNavBar/SpecVillageTopNavBar'
import ComSearchBar from '../ComSearchBar/ComSearchBar'
import PopVillage from './PopVillage/PopVillage'
import VillageActivity from './villageActivity/villageActivity'

const SpecVillaga = () => {
  return (
    <div className={classes.SpecVillaga}>
      <SpecVillageTopNavBar />
      <ComSearchBar />
      <PopVillage />
      <VillageActivity />
    </div>
  )
}

export default SpecVillaga
