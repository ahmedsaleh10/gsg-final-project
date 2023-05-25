import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid } from "swiper";
import ProductCard from '../ProductCard/ProductCard';
import SwiperButtons from './SwiperButtons';
import useStyles from './Styles';
import {Typography } from "@mui/material";


const BestSales = ({products}) => {
    const classes = useStyles()
    const salesProducts = products.filter((product)=> product.sale === true)
  return (
    <div id='Swiper' className={classes.SliderContainer}>
        <Typography variant='subtitle1'>Best Sales</Typography>
        <Swiper
            loop={true}
            grid={{
            rows: 1,
            }}
            modules={[Grid]}
            className={classes.CustomSwiper}
            breakpoints={{
                300:{
                    slidesPerView:1,
                    grid:{
                        rows:3
                    },
                    spaceBetween:20
                },
                600:{
                    slidesPerView:2,
                    grid:{
                        rows:2
                    },
                    spaceBetween:30
                },
                1200:{
                    slidesPerView:3,
                    grid:{
                        rows:1
                    },
                    spaceBetween:30
                }
            }}
        >
            {salesProducts.map((product)=>{
                return(
                    <SwiperSlide key={product.id}>{<ProductCard product={product} />}</SwiperSlide>
                )
            })}
            <SwiperButtons/>
    </Swiper>
    </div>
   
  )
}

export default BestSales