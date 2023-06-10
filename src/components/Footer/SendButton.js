import React from 'react'
import useStyles from './Styles'

const SendButton = () => {
    const classes=useStyles()
  return (
    <button className={classes.sendButton}>
        Send
    </button>
  )
}

export default SendButton