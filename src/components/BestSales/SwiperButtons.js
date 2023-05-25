import React from 'react'
import { useSwiper } from 'swiper/react'
import useStyles from './Styles'

const SliderButtons = () => {
    const classes = useStyles()
    const swiper = useSwiper()
  return (
    <>
        <button className={classes.SwiperPrevButton} onClick={() => swiper.slidePrev()}/>
        <button className={classes.SwiperNextButton} onClick={() => swiper.slideNext()}/>
    </>
  )
}

export default SliderButtons