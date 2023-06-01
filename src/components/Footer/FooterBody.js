import React from 'react'
import useStyles from './Styles'
import { Divider, Grid, Stack, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import CropDinIcon from '@mui/icons-material/CropDin';
import FooterBodyFeatures from './FooterBodyFeatures';

const FooterBody = () => {
    const SupportArray =["Help","FAQ'S","Terms Of Services","Return Police"]
    const ShopArray=["Winter","Men's","Women's","Kid's"]
    const CompanyArray =["Our Story","Careers","Terms & Conditions","Privacy Policy"]
    const ContactArray=["123 Busy Street","Hammersmith","London,1234","+44 123 456 7890","aa@gmail.com"]
    const classes =useStyles()
  return (
    <div className={classes.Container}>
        <Grid className={classes.GridBody} container spacing={1} columns={10}>
        <Grid item xs={10} lg={2}>
                <img className={classes.Image} src='/images/logo.jpg' alt='logo'/>
                <Typography variant='body1' className={classes.Description}> Our Company is dedicated to creating unique and comfortable clothing from Men's, Women's and Kid's</Typography>
                <Stack direction={"row"} spacing={2} className={classes.Icons}>
                    <FacebookIcon /> 
                    <InstagramIcon />
                    <TwitterIcon />
                    <CropDinIcon />
                </Stack>
        </Grid>
        <FooterBodyFeatures title={"Support"} arr={SupportArray}/>
        <FooterBodyFeatures title={"Shop"} arr={ShopArray}/>
        <FooterBodyFeatures title={"Company"} arr={CompanyArray}/>
        <FooterBodyFeatures title={"Contact Us"} arr={ContactArray}/>
    </Grid>
    <Divider className={classes.Divider}/>
    
    <Stack className={classes.FooterBottom} direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
        <Grid item xs={5} >
                <Typography variant='body1'>@2023. All Rights are reserved</Typography>
        </Grid>
        <Grid>
            <img src='/images/visa.png' alt='payment method'/>
        </Grid>
    </Stack>
    </div>
    
  )
}

export default FooterBody