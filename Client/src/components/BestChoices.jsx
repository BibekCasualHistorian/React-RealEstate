import React from 'react'

import './BestChoices.css'
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'


import data from '../utils/SliderData'

const SlideNextButton = () => {
    const swiper = useSwiper();
    return (
        <div className='slider-next-btn'>
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}

const sliderSettings = {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        480: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        800: {
            slidesPerView: 3,
        },
        950: {
            slidesPerView: 4,
        }
    }
}

const BestChoices = () => {

    const EachCard = (props) => {
        console.log("props", props)
        return (
            <div className='best-choices-each-card'>
                <img src={props.each.image} alt="" />
                <p>${props.each.price}</p>
                <h3>{props.each.name}</h3>
            </div>
        )
    }

  return (
    <div className='best-choices'>
        <h2>Best Choices</h2>
        <h1>Popular Residencies</h1>
        <Swiper {...sliderSettings}>
            <SlideNextButton />
                {data.map((each,i) => {
                    return (
                        <SwiperSlide key={i}>
                            <EachCard each={each} />
                        </SwiperSlide>
                    )
                })}
        </Swiper>

    </div>
  )
}

export default BestChoices