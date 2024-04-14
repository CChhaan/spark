import React from 'react'
import classes from '../css/ComSearchBar.module.css'
import { SearchOutlined } from '@ant-design/icons'

const ComSearchBar = () => {
  return (
    <div className={classes.ComSearchBar}>
      <div className={classes.icon}>
        <SearchOutlined style={{ color: '#A6A6A6',fontSize:'16rem' }} />
      </div>
      <input type="text" placeholder='请输入搜索内容'/>
      <button>搜索</button>
    </div>
  )
}

export default ComSearchBar
