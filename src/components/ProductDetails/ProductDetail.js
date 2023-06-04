import React, { useContext, useEffect } from 'react'
import useStyles from './Styles'
import { Grid, Typography ,Stack} from '@mui/material'
import Rating from "@mui/material/Rating";
import Options from './Options';
import { useState } from "react";
import SizeButton from './SizeButton';
import theme from '../../theme';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BuyingFeatures from './BuyingFeatures';
import FavouriteContext from '../../contexts/FavouriteContext';

const ProductDetail = ({product}) => {
    const SizesArray = ['XS','S','M','L','XL']
    const [selectedSize, setSelectedSize] = useState("M");
    const [numberOfItems, setNumberOfItems] = useState(1);
    const Favourite = useContext(FavouriteContext)
    const handleOnChangeSelectedSize = (value) => {
        setSelectedSize(value);
      };
    const handleIncrementNumber = ()=> {
        setNumberOfItems(numberOfItems + 1)
    }  
    const handleDecrementNumber =()=>{
        
        numberOfItems > 0 && setNumberOfItems(numberOfItems - 1)
    }

    const classes = useStyles()

    useEffect(()=> window.scrollTo(0,0),[])
  return (
    <div className={classes.Container}>
        <Grid container columns={10}>
            <Grid item xs={10} md={5} className={classes.GridItem1}>
                <img src={product.image} width={"100%"} height={'100%'} alt='productImg' />
            </Grid>
            <Grid item xs={10} md={5} className={classes.GridItem2}>
                <div className={classes.InformationContainer}>
                    <Typography variant='subtitle2' color={theme.palette.secondary.light} pb={2}>{product.title}</Typography>
                    <Typography variant='caption' color={theme.palette.secondary.dark} pb={2} display={'block'}>Price- ${product.price}</Typography>
                    <Stack direction={{sm:'column', md:'row'}} alignItems={{sm:'flex-start',md:'center'}} spacing={3}>
                        <Rating value={product.rating.rate} precision={0.5} size={'large'} readOnly className={classes.Rating} /> 
                        <Typography variant='caption' color={theme.palette.secondary.dark}>( {product.rating.count} Reviews)</Typography>  
                    </Stack>
                </div>
                <Options/>
                <Stack direction={{xs:'column',sm:'row'}} spacing={{xs:0.5,sm:1,md:1.5}} pb={4}>
                    <Typography variant='caption' color={theme.palette.secondary.dark}>Size:</Typography>
                    <Stack direction={'row'} spacing={{xs:0.5,sm:1,md:1.5}}>
                    {SizesArray.map((size,index)=> {
                        return(
                            <SizeButton content={size} key={index} onClick={handleOnChangeSelectedSize} selected={ size === selectedSize} />
                        )
                    })}
                    </Stack>
                </Stack>
                <Stack direction={{xs:'column',sm:'row'}} alignItems={{xs:'flex-start',md:'center'}} justifyContent={'space-between'} pb={4} spacing={2}>
                    <Stack direction={'row'} alignItems={'center'} spacing={2}>
                        <button onClick={handleDecrementNumber} className={classes.ButtonsForNumberOfItems}> <RemoveIcon/> </button>
                        <Typography variant='body2' color={theme.palette.common.black} fontWeight={700}> {numberOfItems} </Typography>
                        <button onClick={handleIncrementNumber} className={classes.ButtonsForNumberOfItems}> <AddIcon/> </button>
                    </Stack>
                    <Stack direction={'row'} spacing={2}>
                        <button className={classes.CartButton}> Add to Cart </button>
                        <button className={classes.FavoriteIcon} onClick={()=> Favourite.handleFavoriteButton(product)}> <FavoriteBorderIcon color='action'/> </button>
                    </Stack>
                    
                </Stack>
                <Stack direction={'column'} spacing={0.5}>
                    <Typography variant='caption' color={theme.palette.secondary.dark} display={'block'}>Description:</Typography>
                    <Typography variant='body1'>{product.description}</Typography>
                </Stack>
                <BuyingFeatures/>
            </Grid>
        </Grid>
    </div>
  )
}

export default ProductDetail