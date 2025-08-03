import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img1 from '../assets/images/cosmetics.jpg';
import img2 from '../assets/images/headphone.jpg';
import img3 from '../assets/images/iphoneImg.jpg';
import img4 from '../assets/images/lightImage.jpg';
import img5 from '../assets/images/Party_Wear_karma_blog_banner.jpg';
import img6 from '../assets/images/riedel offer.JPG';
import img7 from '../assets/images/smartWatch.jpg';
import img8 from '../assets/images/t-shirt.jpg';

const Header = () => {
  return (
    <div className='w-full mt-20 md:mt-24 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper md:h-[600px]"
      >
        <SwiperSlide className='w-full '>
          <img className='w-full h-full ' src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full'>
            <img className='w-full h-full ' src={img2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full'>
            <img className='w-full h-full ' src={img3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full '>
            <img className='w-full h-full ' src={img4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full'>
            <img className='w-full h-full ' src={img5} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full'>
            <img className='w-full h-full ' src={img6} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full '>
            <img className='w-full h-full ' src={img7} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full'>
            <img className='w-full h-full ' src={img8} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;