import React from 'react';
import classes from '../css/Index.module.css';
import IndexAds from './IndexAds/IndexAds';
import IndexModNav from './IndexModNav/IndexModNav';
import IndexCateNav from './IndexCateNav/IndexCateNav.1';

const Index = () => {
  return (
    <div>
      <div className={classes.Index}>
        <IndexAds />
        <IndexModNav />
        <IndexCateNav />
      </div>
    </div>
  )
}

export default Index

