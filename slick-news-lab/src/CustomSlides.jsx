import { useState } from 'react'
import './CustomSlides.css'
import React from "react"
import Slider from "react-slick"
import NewsList from "./NewsAPI"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function CustomSlide(props) {
  const { index, ...otherProps } = props;
  return (
    <div
      className='slider-items'
      {...otherProps}
    >
      <p>{index}</p>
      <NewsList />
    </div>
  );
}

function CustomSlides() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider
        className='slider'
        {...settings}
      >
        <CustomSlide index={1} />
        <CustomSlide index={2} />
        <CustomSlide index={3} />
        <CustomSlide index={4} />
        <CustomSlide index={5} />
        <CustomSlide index={6} />
      </Slider>
    </div>
  );
}

export default CustomSlides;

