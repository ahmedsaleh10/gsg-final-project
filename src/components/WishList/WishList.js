import React, { useState } from "react";
import WishProduct from "./WishProduct";
import useStyles from "./Styles";
import CancelPresentationSharpIcon from "@mui/icons-material/CancelPresentationSharp";
import { IconButton, Stack, Typography } from "@mui/material";
const WishList = ({ products, deleteHandler }) => {
  const classes = useStyles();
  const [wishProducts, setWishProducts] = useState(products);
  const handleDeletItem = (productId) => {
    const newProductsArr = wishProducts.filter(
      (product) => product.id !== productId
    );
    setWishProducts(newProductsArr);
  };

  return (
    <div className={classes.container}>
      <Typography variant="subtitle1" textAlign={"center"} my={3}>
        Wish List Products
      </Typography>
      {wishProducts?.map((product, index) => {
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
                deleteHandler(product.id);
                handleDeletItem(product.id);
              }}
            >
              <CancelPresentationSharpIcon />
            </IconButton>
            <WishProduct product={product} />
          </Stack>
        );
      })}
    </div>
  );
};

export default WishList;
