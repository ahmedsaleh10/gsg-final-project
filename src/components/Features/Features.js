import React from 'react'
import Feature from './Feature'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import { Grid } from "@mui/material";
import useStyles from './Styles';

const Features = () => {
    const classes=useStyles()
  return (
    <Grid container spacing={1} columns={12} className={classes.FeaturesContainer}>
        <Grid item className={classes.GridItem} xs={6} lg={3}>
            <Feature icon={<LocalShippingOutlinedIcon color='error'/>} title={"Free Shipping"} description={"an orders over $49.00"}/>
        </Grid>
        <Grid item className={classes.GridItem} xs={6} lg={3}>
            <Feature icon={<WatchOutlinedIcon color='error'/>} title={"24/7 Help Center"} description={"support online 24hours"}/> 
        </Grid>
        <Grid item className={classes.GridItem} xs={6} lg={3}>
         <Feature icon={<CardGiftcardOutlinedIcon color='error'/>} title={"Gift Promotion"} description={"an orders over $49.00"}/>
        </Grid>
        <Grid item className={classes.GridItem} xs={6} lg={3}>
         <Feature icon={<AttachMoneyOutlinedIcon color='error'/>} title={"Money Gurantee"} description={"15 days money back"}/>
        </Grid>
    </Grid>
  )
}

export default Features