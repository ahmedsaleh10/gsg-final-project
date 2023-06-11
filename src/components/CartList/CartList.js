import React, { useState } from "react";
import useStyles from "../WishList/Styles";
import { IconButton, Stack, Typography } from "@mui/material";
import CancelPresentationSharpIcon from "@mui/icons-material/CancelPresentationSharp";
import theme from '../../theme';
import {Grid} from '@mui/material';
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const CartList = ({ products, deleteHandler }) => {
  const [cartListProducts, setCartListProducts] = useState(products);
  const classes = useStyles();
  var totalPrice = 0;

  for (let i = 0; i < cartListProducts.length; i++) {
    (totalPrice +=
     cartListProducts[i].numberOfProductDemand *
      cartListProducts[i].product.price)
  }

  const handleDeletItem = (productId) => {
    const newProductsArr = cartListProducts.filter(
      (item) => item.product.id !== productId
    );
    setCartListProducts(newProductsArr);
  };

  const handleIncrementDemandItem  = (id) => {
    const newCartListProducts = cartListProducts.map((item) => {
      if(item.product.id === id){
        item.numberOfProductDemand += 1
      }
      return({...item})
    })
    setCartListProducts(newCartListProducts)
  }
  
  const handleDecrementDemandItem = (id)=>{
    const newCartListProducts = cartListProducts.map((item) => {
      if(item.product.id === id){
        item.numberOfProductDemand -= 1
      }
      return({...item})
    })
    setCartListProducts(newCartListProducts)
  }

  return (
    <div className={classes.container}>
      <Typography variant="subtitle1" textAlign={"center"} my={3}>
        Cart List Products
      </Typography>
      {cartListProducts.map((item, index) => {
        return (
          <Stack
            key={index}
            direction={{ xs: "column-reverse", md: "row" }}
            alignItems={"center"}
            spacing={2}
            marginBottom={3}
          >
            <IconButton
              onClick={() => {
                deleteHandler(item.product.id);
                handleDeletItem(item.product.id);
              }}
            >
              <CancelPresentationSharpIcon />
            </IconButton>

            <Grid
              container
              columns={12}
              rowGap={"0.75rem"}
              width={"100%"}
              alignItems={"center"}
              flexWrap={{ xs: "nowrap", md: "wrap" }}
              direction={{ xs: "column", md: "row" }}
              className={classes.gridContainer}
            >
              <Grid
                item
                md={3}
                height={"100%"}
                className={classes.gridImageItem}
              >
                <img
                  src={item.product.image}
                  alt="img"
                  className={classes.productImage}
                />
              </Grid>
              <Grid item md={4}>
                <Typography
                  variant="body1"
                  className={classes.productTitle}
                  color={theme.palette.primary.dark}
                >
                  {item.product.title}
                </Typography>
              </Grid>
              <Grid item md={2}>
                <Typography variant="body1" textAlign={"center"}> {item.product.price}$</Typography>
              </Grid>
              <Grid item md={3}>
                <Stack direction={"row"} alignItems={"center"} spacing={2}>
                  <button
                    onClick={() => {handleDecrementDemandItem(item.product.id)}}
                    className={classes.buttonsForNumberOfItems}
                  >
                    <RemoveIcon />
                  </button>
                  <Typography
                    variant="body1"
                    color={theme.palette.common.black}
                    fontWeight={700}
                  >
                    {item.numberOfProductDemand}
                  </Typography>
                  <button
                    onClick={()=>{handleIncrementDemandItem(item.product.id)}}
                    className={classes.buttonsForNumberOfItems}
                  >
                    <AddIcon />
                  </button>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        );
      })}
      <Typography variant="subtitle1" textAlign={"center"}>
        Total Price = {`${totalPrice.toFixed(2)}`}$
      </Typography>
    </div>
  );
};

export default CartList;
