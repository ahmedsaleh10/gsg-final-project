import React from 'react'
import { Grid, Stack, Typography } from '@mui/material'
import useStyles from './Styles'

const FooterBodyFeatures = ({arr,title}) => {
    const classes =useStyles()
  return (
    <Grid item xs={5}  md={2} >
                <Typography variant='caption' className={classes.Title} > {title}</Typography>
                <Stack spacing={2}>
                    {arr.map((item,index)=>{
                        return(
                        <Typography key={index} variant='body1'>{arr[index]}</Typography>
                        )
                    })}
                </Stack>
        </Grid>
  )
}

export default FooterBodyFeatures