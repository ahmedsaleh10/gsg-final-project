import React from 'react'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Typography } from '@mui/material';
import useStyles from './Styles';
import { Stack } from '@mui/system';
import theme from '../../theme';
const Options = () => {
    const options =["In Stock", "Free Shipping Available","Prama Code"]
    const classes = useStyles()
  return (
    <div className={classes.OptionsContainer}>
        {options.map((option,index) => {
            return(
                <Stack direction={'row'} spacing={1.5} pb={1.5} key={index}>
                    <CheckBoxIcon color='warning'/>
                     <Typography variant='body1' color={theme.palette.secondary.dark}>{option}</Typography>
                </Stack>    
            )
        })}
    </div>
  )
}

export default Options