import { Typography,Stack } from '@mui/material'
import React, { useContext, useState } from 'react'
import useStyles from '../WishList/Styles';
import theme from '../../theme';
import {Grid} from '@mui/material';
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CartContext from '../../contexts/CartContext'

const CartProduct = ({product,numberofItem}) => {
    const [itemDemand,setItemDemand]=useState(numberofItem)
    const cart = useContext(CartContext)
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
        <Typography variant='body1'> {product.price}$</Typography>
        </Grid>
        <Grid item md={3}>
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <button
                onClick={() => {
                  itemDemand > 0 && setItemDemand((prev)=> prev -1)
                }}
                className={classes.ButtonsForNumberOfItems}
                >
                <RemoveIcon />
              </button>
              <Typography
                variant="body1"
                color={theme.palette.common.black}
                fontWeight={700}
              >
                {itemDemand}
              </Typography>
              <button
                onClick={() => {
                  setItemDemand((prev) => prev+1);
                }}
                className={classes.ButtonsForNumberOfItems}
              >
                <AddIcon />
              </button>
            </Stack>
        </Grid>
    </Grid>
  )
}

export default CartProduct