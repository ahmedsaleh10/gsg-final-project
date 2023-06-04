import { Typography } from '@mui/material'
import React from 'react'
import useStyles from './Styles';
import theme from '../../theme';
import {Grid} from '@mui/material';
const WishProduct = ({product}) => {
    const classes = useStyles()
  return (
    <Grid container columns={12}  rowGap={'0.75rem'} width={'100%'} alignItems={'center'} flexWrap={{xs:'nowrap',md:'wrap'}} direction={{xs:'column',md:'row'}} className={classes.GridContainer}>
        <Grid item md={3} height={'100%'} className={classes.GridImageItem}>
            <img src={product.image} alt='img' width={'50%'} height={'100%'}/>
        </Grid>
        <Grid item md={4}>
        <Typography variant='body1' className={classes.ProductTitle} color={theme.palette.primary.dark}>{product.title}</Typography>
        </Grid>
        <Grid item md={2}>
        <Typography variant='body1'> ${product.price}</Typography>
        </Grid>
        <Grid item md={3}>
        <button className={classes.AddtoCartButton} ><Typography color={theme.palette.primary.dark}>Add To Cart</Typography></button>
        </Grid>
    </Grid>
  )
}

export default WishProduct