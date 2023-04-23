import * as Layout from '../../layouts';
import { FiArrowLeft } from "react-icons/fi";
import * as Component from '../../components';
import { useRef, useState } from 'react';
import images from '../../assets/img/villa/v-1.png';
import images2 from '../../assets/img/villa/v-2.png';
import images3 from '../../assets/img/villa/v-3.png';
import images4 from '../../assets/img/villa/v-4.png';
import images5 from '../../assets/img/villa/v-5.png';
import { useLocation } from 'react-router-dom';



// Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./indexs.css";
import { FreeMode, Navigation, Thumbs } from "swiper";




function Detailproperty() {
  let location = useLocation();
  console.log(location);
  
  // if(location === '/detailproperty/1'){
  //   import "./index.css";
  // }


  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <Layout.Navbar />
      <div id='bg-detailproperty' className='flex justify-center items-center relative text-white'>
        <Layout.Container>
          <div className='absolute top-5 left-5'>
            <FiArrowLeft className='text-2xl'></FiArrowLeft>
          </div>
          <div >
            <h1 className='underline text-4xl md:text-5xl text-center '>VILLA ANONYMOUS</h1>
          </div>
        </Layout.Container>
      </div>

      {/* Start Filter */}
      <Component.FilterAccordion />
      {/* End Filter Accordion */}


      {/* Big Card */}
      <div className=''>
        <Layout.Container>
          <div>
            <div className='cardproperty shadow-2xl py-10 px-8 rounded-xl'>
              <div className='flex justify-between'>
                <h1 className='text-3xl'>Villa Anonymous / <span className='text-base'>#ID 001</span></h1>
                <Component.Button label="Order Now" btn="ordernow" />
              </div>
              <hr className='my-10' />
              {/* Start Image Thumbnail */}
              <div>
                <Swiper
                  spaceBetween={10}
                  navigation={true}
                  loop={true}
                  thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2 swipe"
                >
                  <SwiperSlide className='swiper-det-prop'>
                    <img src={images} />
                  </SwiperSlide>
                  <SwiperSlide className='swiper-det-prop'>
                    <img src={images2} />
                  </SwiperSlide>
                  <SwiperSlide className='swiper-det-prop'>
                    <img src={images3} />
                  </SwiperSlide>
                  <SwiperSlide className='swiper-det-prop'>
                    <img src={images4} />
                  </SwiperSlide>
                  <SwiperSlide className='swiper-det-prop'>
                    <img src={images5} />
                  </SwiperSlide>
                </Swiper>

                {/* Thumbnail swiper */}
                <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper swipe"
                >
                  <SwiperSlide>
                    <img src={images} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={images2} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={images3} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={images4} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={images5} />
                  </SwiperSlide>
                  
                </Swiper>

              </div>
              {/* End Image Thumbnail */}

              {/* Start Detail Property */}
              <div className='my-32'>
                <h2 className='text-2xl font-bold'>Villa Anonymous Detail</h2>
                <div className='check-detail-property my-7'>
                  <ul className='flex'>
                    <div>
                      <li className='m-5'>CHECK 1</li>
                      <li className='m-5'>CHECK 2</li>
                      <li className='m-5'>CHECK 3</li>
                      <li className='m-5'>CHECK 3</li>
                    </div>
                    <div>
                      <li className='m-5'>CHECK 4</li>
                      <li className='m-5'>CHECK 5</li>
                      <li className='m-5'>CHECK 6</li>
                    </div>
                  </ul>
                </div>
              </div>
              {/* End Detail property */}
              <hr />

              {/* Start Description */}
              <div>
                <h2 className='text-2xl font-bold mt-10'>Description</h2>
                <p className='mt-5'>
                  Looking for a charming family home in the area of Canggu? Look no further than Villa Menaka! This beautiful villa boasts 2 bedrooms, each with its own bathroom, as well as an open dining area, equipped kitchenette, rooftop terrace, garden space, private pool, and convenient parking spot, all situated on a 150 sqm land allotment.The minimalist design of this villa creates a welcoming atmosphere, perfect for those looking for a peaceful retreat. 
                  Situated just a short drive away from Umalas, Berawa, and Canggu, you'll have easy access to a variety of cafes, bars, shops, and beaches.Whether you're a small family or a couple looking for a long-term rental in Canggu, Villa Menaka is the perfect choice. This beautiful villa is available for a minimum rental period of 2 years, so don't wait - schedule a visit today and start living your best life in beautiful Bali!
                </p>
              </div>
              {/* End Description */}
              
              {/* Start Include Facilities*/}
                <div className='my-32'>
                  <h2 className='text-2xl font-bold mt-10'>Included Facilities</h2>
                  <div className='check-detail-property my-7'>
                    <ul className='flex'>
                      <div>
                        <li className='m-5'>CHECK 1</li>
                        <li className='m-5'>CHECK 2</li>
                        <li className='m-5'>CHECK 3</li>
                        <li className='m-5'>CHECK 3</li>
                      </div>
                      <div>
                        <li className='m-5'>CHECK 4</li>
                        <li className='m-5'>CHECK 5</li>
                        <li className='m-5'>CHECK 6</li>
                      </div>
                    </ul>
                  </div>
                </div>
              {/* End Include Facilities*/}
              <hr />

              {/* Start Location */}
              <div>
                <h2 className='text-2xl font-bold my-10'>Location</h2>
                <div className='w-full h-72 bg-blue-500'>

                </div>
              </div>

              {/* End Location */}
            </div>
          </div>

        </Layout.Container>
      </div>
    </div>
  )
}

export default Detailproperty;