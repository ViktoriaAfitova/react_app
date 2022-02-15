import React from 'react';
import classes from './MyButton.module.css'

const MyButton = ({children, action}) => {
  return (
    <button className={classes.myBtn} onClick={() => action() }>
        {children}
    </button>
  )
}

export default MyButton;