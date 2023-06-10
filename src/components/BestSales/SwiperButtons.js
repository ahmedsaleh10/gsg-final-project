import React from 'react'
import { useSwiper } from 'swiper/react'
import useStyles from './Styles'

const SliderButtons = () => {
    const classes = useStyles()
    const swiper = useSwiper()
  return (
    <>
        <button className={classes.swiperPrevButton} onClick={() => swiper.slidePrev()}/>
        <button className={classes.swiperNextButton} onClick={() => swiper.slideNext()}/>
    </>
  )
}

export default SliderButtons