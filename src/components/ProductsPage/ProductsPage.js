import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination"; 
import { Grid, Pagination } from "swiper";
import ProductCard from "../ProductCard/ProductCard"
import useStyles from './Styles';
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';

const  ProductsPage = ({products}) => {
  const classes = useStyles()
  const [menProducts,serMenProducts]=useState(products)
  const [activeFilter,setActiveFilter]=useState('All')
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  const handleAllProducts =() => {
    serMenProducts(products)
    setActiveFilter('All')
  }

  const handleSummerProducts =() => {
    const SummerProducts = products.filter((product)=>product.season === "summer")
    serMenProducts(SummerProducts)
    setActiveFilter('Summer')
  }

  const handleWinterProducts =() => {
    const WinterProducts = products.filter((product)=>product.season === "winter")
    serMenProducts(WinterProducts)
    setActiveFilter('Winter')
  }
  return (
    <>
      <div>
        <img src='/images/winter massive.png' alt='winter massive' width={'100%'} className={classes.MenPageImage} />
      </div>
      <Stack className={classes.ButtonContainer} direction={'row'}  >
        <Typography className={activeFilter === 'All'? classes.ActiveFilter: classes.Filter} variant='body1' onClick={handleAllProducts}>All</Typography>
        <Typography className={activeFilter === 'Summer'? classes.ActiveFilter: classes.Filter} variant='body1' onClick={handleSummerProducts}>Summer</Typography>
        <Typography className={activeFilter === 'Winter'? classes.ActiveFilter: classes.Filter} variant='body1' onClick={handleWinterProducts}>Winter</Typography>
      </Stack>
      <div id='Swiper' className={classes.SwiperContainer} >
      <Swiper
      slidesPerView={3}
      slidesPerGroupSkip={1}
      breakpoints={{
        250:{
          slidesPerView:1,
          slidesPerGroup:1,
          grid:{
            rows:3
          }
        },
        900:{
          slidesPerView:2,
          slidesPerGroup:2,
          grid:{
            rows:3
          }
        },
        1200:{
          slidesPerView:3,
          slidesPerGroup:3,
          grid:{
            rows:4
          }
        }
      }}
      grid={{
        rows:4
      }}
      spaceBetween={30}
      pagination={pagination}
      modules={[Grid, Pagination]}
      className={classes.CustomSwiper}
      >
        {menProducts?.map((product,index) => {
          return(
            <SwiperSlide key={index}> <ProductCard  product={product}/> </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
    </>
    
  )
}

export default ProductsPage