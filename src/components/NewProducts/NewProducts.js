import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import ProductCard from '../ProductCard/ProductCard';
import useStyles from "./Styles";
import { Grid,Navigation } from "swiper";
import { Typography,Stack } from "@mui/material";

const NewProducts = ({ products }) => {
  const unSaleProduct = products.filter((product)=> product.sale === false)
  const [productsArray, setProductArray] = useState(unSaleProduct);
  const [activeButton,setActiveButton]=useState("All")
  const classes = useStyles()

  return (
    <div id='Swiper' className={classes.sliderContainer}>
        <img src="/images/winter massive.png" alt="winter collection" className={classes.newProductsImage}/>
        <Stack direction={{xs:'column',lg:'row'}} alignItems={'center'}>
            <Typography variant="subtitle1" className={classes.containerTitle} textAlign={'center'}> New Products </Typography>
            <Stack direction={{xs:'column',sm:"row"}} spacing={{xs:2}} className={classes.buttonStack}>
                <button onClick={()=> {setProductArray(unSaleProduct); setActiveButton("All")}} className={activeButton === "All" ? classes.activeButton : ""}>All</button>
                <button onClick={()=> {setProductArray(unSaleProduct.filter((product)=> product.category === `men's clothing`)); setActiveButton("Shop Men's")}} className={activeButton === "Shop Men's" ? classes.activeButton :""}>Shop Men's</button>
                <button onClick={()=> {setProductArray(unSaleProduct.filter((product)=> product.category === `women's clothing`)); setActiveButton("Shop Women's")}} className={activeButton === "Shop Women's" ? classes.activeButton :""}> Shop Women's</button>
            </Stack>
        </Stack>
        <Swiper
            navigation={true}
            loop={true}
            grid={{
            rows: 1,
            }}
            modules={[Grid,Navigation]}
            centeredSlides={true}
            className={classes.customSwiper}
            breakpoints={{
            300: {
                slidesPerView: 1,
                grid: {
                rows: 3,
                },
                spaceBetween: 20,
            },
            600: {
                slidesPerView: 2,
                centeredSlides:false,
                grid: {
                rows: 2,
                },
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 4,
                grid: {
                rows: 1,
                },
                spaceBetween: 30,
            },
            }}
        >
            {productsArray.map((product) => {
            return (
                <SwiperSlide key={product.id}>
                {<ProductCard product={product} />}
                </SwiperSlide>
            );
            })}
        </Swiper>
    </div>
  );
};

export default NewProducts;
