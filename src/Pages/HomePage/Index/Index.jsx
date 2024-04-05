import React from 'react'
import classes from '../css/Index.module.css'
import IndexAds from './IndexAds/IndexAds'
import IndexModNav from './IndexModNav/IndexModNav'

const Index = () => {
  return (
    <div className={classes.Index}>
      <IndexAds />
      <IndexModNav />
    </div>
  )
}

export default Index
