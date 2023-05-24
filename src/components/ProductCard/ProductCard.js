import { IconButton, Link, Typography } from "@mui/material";
import React from "react";
import useStyles from "./Styles";
import Rating from "@mui/material/Rating";
import { Stack } from "@mui/system";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";

const ProductCard = ({ product }) => {
  const classes = useStyles();
  return (
    <div className={classes.CardContainer}>
      <Link className={classes.Link}>
        <div className={classes.Buttons}>
          {/* each button should do some actions */}
          <IconButton className={classes.IconButton}>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton className={classes.IconButton}>
            <ShoppingCartIcon />
          </IconButton>
          <IconButton className={classes.IconButton}>
            <VisibilityIcon />
          </IconButton>
        </div>
        <img src={product.image} className={classes.CardImage} alt="img" />
      </Link>

      {product.sale ? (
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          spacing={2}
        >
          <Typography variant="body1" className={classes.DeletedPrice}>
            ${(100 * product.price) / (100 - 100 * product.salePercantage)}
          </Typography>
          <Typography variant="body1"> ${product.price} </Typography>
        </Stack>
      )
       : <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          className={classes.Details}
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
      <Typography variant="body1" className={classes.ProductTitle}>
        {product.title}
      </Typography>
    </div>
  );
};

export default ProductCard;
