import { IconButton, Link, Typography } from "@mui/material";
import React, { useContext } from "react";
import useStyles from "./Styles";
import Rating from "@mui/material/Rating";
import { Stack } from "@mui/system";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router";
import FavouritesContext from "../../contexts/FavouritesContext";
import CartContext from "../../contexts/CartContext";
import AuthUserContext from "../../contexts/AuthUserContext";

const ProductCard = ({ product }) => {
  const favourite = useContext(FavouritesContext)
  const cart = useContext(CartContext)
  const authUser = useContext(AuthUserContext)
  const classes = useStyles();
  const number =parseInt((100 * product.price) / (100 - 100 * product.salePercantage))
  const navigate = useNavigate();
  const handleProductDetails = () => {
    navigate(`/products/${product.id}`)
  }

  return (
    <div className={classes.cardContainer}>
      <Link className={classes.link}>
        {authUser ? 
        <div className={classes.buttons}>
          <IconButton className={classes.iconButton} onClick={() => favourite.handleFavoriteButton(product)}>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton className={classes.iconButton} onClick={() => cart.handleCartButton(product)}>
            <ShoppingCartIcon />
          </IconButton>
          <IconButton className={classes.iconButton} onClick={handleProductDetails}>
            <VisibilityIcon />
          </IconButton>
        </div> : <></> }
        <img src={product.image} className={classes.cardImage} alt="img" />
      </Link>

      {product.sale ? (
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          spacing={3}
        >
          <Typography variant="body2" className={classes.deletedPrice}>
            ${number.toFixed(2)}
          </Typography>
          <Typography variant="body2"> ${product.price} </Typography>
        </Stack>
      )
       : <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          className={classes.details}
        >
          <Typography variant="body2"> ${product.price} </Typography>
          <Rating
            value={product.rating.rate}
            precision={0.5}
            size="large"
            readOnly
          />
        </Stack>
      }
      <Typography variant="body1" className={classes.productTitle}>
        {product.title}
      </Typography>
    </div>
  );
};

export default ProductCard;
