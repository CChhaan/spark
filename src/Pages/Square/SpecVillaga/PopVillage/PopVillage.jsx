import React from 'react'
import classes from '../css/PopVillage.module.css'
import VillageProfile from './VillageProfile/VillageProfile'
import village from '../../../../Data/village.js'

const PopVillage = () => {

  return (
    <div className={classes.PopVillage}>
      <div className={classes.top}>
        <h3>热门村落</h3>
        <span>更多&gt;&gt;</span>
      </div>
      <div className={classes.content}>
        <VillageProfile
          img={village[0].pic}
          name={village[0].name}
          info={village[0].info}
        />
        <VillageProfile
          img={village[1].pic}
          name={village[1].name}
          info={village[1].info}
        />
        <VillageProfile
          img={village[2].pic}
          name={village[2].name}
          info={village[2].info} />
      </div>
    </div>
  )
}

export default PopVillage
