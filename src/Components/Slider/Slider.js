import './Slider.css'
import { FeaturedData } from '../../Json/FeaturedData'

// ==========================================================
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from "swiper";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Zoom, Navigation, Pagination ,Autoplay} from 'swiper/modules';
// ==========================================================
import { FaStar , FaDownload } from 'react-icons/fa6'
function Slider() {
    // const [resize, setResize] = useState(0)
    const [nums, setNums] = useState(2)
    useEffect(() => {
        function widthResizer(){
            var width = window.innerWidth
            // setResize(width)
            if (width < 600) {
                setNums(1)
            } 
            if (width > 600) {
                setNums(2)
            }
          }
          widthResizer()
          window.addEventListener('resize', widthResizer)

    },[])
    // console.log(resize);
    // console.log(nums);
    const showSliderSwiper = FeaturedData.map((el,i) => (
        <SwiperSlide key={i}>
            <div className="swiper-zoom-container">
                <img src={el.img} alt='img'/>
            </div>
                <div className='most-popular-item-content mt-3'>
                    <h4 className='most-popular-item-title'>
                        {el.title} <br />
                        <span>{el.titleTow}</span>
                    </h4>
                    <ul>
                        <li><span className='text-warning'><FaStar /></span> <span>{el.valuation}</span></li>
                        <li> <span style={{color: 'var(--color-primary)'}}><FaDownload /></span>  <span>{el.size}</span></li>
                    </ul>
                </div>
        </SwiperSlide>
    ))

  return (
        <Swiper
            style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
            }}
            slidesPerView={nums}
            spaceBetween={30}
            zoom={true}
            navigation={true}
            autoplay={{
                delay: 5000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false
            }}
            loop={true}
            pagination={{
            clickable: true,
            }}
            modules={[Zoom, Navigation, Pagination,Autoplay]}
            className="mySwiper"
        >
            {showSliderSwiper}
        </Swiper>
  )
}

export default Slider