import React from 'react'
import FooterBody from './FooterBody'
import useStyles from './Styles'
import FooterHeader from './FooterHeader'

const Footer = () => {
  const classes =useStyles()
  return (
    <footer className={classes.MainFooter}>
        <FooterHeader/>
        <FooterBody/>
    </footer>
  )
}

export default Footer