import React from 'react'
import classes from '../css/Index.module.css'
import IndexAds from './IndexAds/IndexAds'
import IndexModNav from './IndexModNav/IndexModNav'
import IndexCateNav from './IndexCateNav/IndexCateNav'

const Index = () => {
  return (
    <div className={classes.Index}>
      <IndexAds />
      <IndexModNav />
      <IndexCateNav />
    </div>
  )
}

export default Index
