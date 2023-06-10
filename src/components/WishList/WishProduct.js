import { Typography } from '@mui/material'
import React, { useContext } from 'react'
import useStyles from './Styles';
import theme from '../../theme';
import {Grid} from '@mui/material';
import CartContext from '../../contexts/CartContext';

const WishProduct = ({product}) => {
    const cart = useContext(CartContext)
    const classes = useStyles()
  return (
    <Grid container columns={12}  rowGap={'0.75rem'} width={'100%'} alignItems={'center'} flexWrap={{xs:'nowrap',md:'wrap'}} direction={{xs:'column',md:'row'}} className={classes.gridContainer}>
        <Grid item md={3} height={'100%'} className={classes.gridImageItem}>
            <img src={product.image} alt='img' className={classes.productImage}/>
        </Grid>
        <Grid item md={4}>
        <Typography variant='body1' className={classes.productTitle} color={theme.palette.primary.dark}>{product.title}</Typography>
        </Grid>
        <Grid item md={2}>
        <Typography variant='body1' textAlign={'center'}> ${product.price}</Typography>
        </Grid>
        <Grid item md={3}>
        <button className={classes.addtoCartButton} onClick={()=>cart.handleCartButton(product)} ><Typography color={theme.palette.primary.dark}>Add To Cart</Typography></button>
        </Grid>
    </Grid>
  )
}

export default WishProduct