import { Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import theme from '../../theme'
import useStyles from './Styles'

const NotFound = () => {
    const navigate = useNavigate()
    const classes = useStyles()
  return (
    <Stack textAlign={"center"} spacing={4} py={{xs:5,md:15}} px={{xs:4,md:10}} alignItems={'center'}>
        <Typography variant='h1' color={theme.palette.primary.dark}> 404 not founded Page &#128528;</Typography>
        <button className={classes.signButton} onClick={() => {navigate('/')}}>Go to Home Page</button>
    </Stack>
  )
}

export default NotFound