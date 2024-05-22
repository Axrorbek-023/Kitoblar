import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Slider.css';

// import required modules
import { Pagination, Autoplay} from 'swiper/modules';

export default function SliderApp() {
  return (
    <div className='slider__app'>
      <Swiper pagination={true} loop={true} autoplay={{delay: 2500, disableOnInteraction: false,}} modules={[Pagination, Autoplay]} className="mySwiper">
        <SwiperSlide>
            <img src="https://ziyouz.uz/wp-content/uploads/2017/01/alisher-navoiy02.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Zahiriddin_Muhammad_Bobur.jpg/220px-Zahiriddin_Muhammad_Bobur.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://lh5.googleusercontent.com/proxy/ncdffX44UBKBF13_3ogIpIbzmlMwwZOntsZ7Q9CPPv3FyFtqqHlWA52mzg6pXtRX6KZD8X8SzK1x3FGYNd2M8Xf7Mqja26gQ3BQLObsZ35sCl2V6ciAmrzQMgZsNMQ" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRklIg7_hKFIEKIOwWrhWh5H64VIkGFptbXQ03Y8r7EHw&s" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRklIg7_hKFIEKIOwWrhWh5H64VIkGFptbXQ03Y8r7EHw&s" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
