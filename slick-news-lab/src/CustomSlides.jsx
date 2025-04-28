import { useState } from 'react'
import './CustomSlides.css'
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function CustomSlide(props) {
  const { index, ...otherProps } = props;
  return (
    <div
      className='slider-items'
      {...otherProps}
    >
      <h3>{index}</h3>
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

// var url = 'https://newsapi.org/v2/top-headlines?' +
//           'category=business&' +
//           'pageSize=6&' +
//           `apiKey=f4ce278dcf6d4c3dbe301e7599c169ae&` +
//           'country=ja';

// var req = new Request(url);

// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })

const [news, setNews] = useState(ini);
useEffect(() => {
  const url = 'http://newsapi.org/v2/top-headlines?' +
    'country=ja&' +
    'pageSize=6&' +
    `apiKey=f4ce278dcf6d4c3dbe301e7599c169ae`;
  let req = new Request(url);
  fetch(req)
    .then(async (response) => {
      setNews(await response.json());
    })
},[])

export default CustomSlides;

