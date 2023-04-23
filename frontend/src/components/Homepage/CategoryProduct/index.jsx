import images from '../../../assets/img/banner-img.webp';
import v1 from '../../../assets/img/villa/v-1.png';
import { Container } from "../../../layouts";
import * as component from '../../../components/index';
import { FiMapPin, FiHeart } from "react-icons/fi";


// SWIPER JS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./index.css";
import { Autoplay } from "swiper";
import classNames from 'classnames';



function CategoryProduct() {
  return (
    <Container>
        <div className='flex justify-between lg:justify-between items-end relative mt-20'>
            <h1 className={classNames(' text-black bg-gradient-to-b from-transparent via-transparent to-[#B9E5FF]', 'layanan-terlaris text-base sm:text-2xl lg:text-4xl font-bold px-1 mt-16 ')}>
                Yearly & Monthly
            </h1>
            <component.Button label="See More" btn="seemore" />
        </div>
        <div className="mb-16 mt-10 mx-auto">
            <Swiper
            modules={[Autoplay]}
            slidesPerView={"auto"}
            // centeredSlides={true}
            // a11y={false}
            grabCursor={true}
            freeMode={true}
            speed={1100}
            loop={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                // reverseDirection: true
                
            }}
            className="mySwiper"
            breakpoints={{
                // SETTINGANNYA MIN WIDTH
                0: {
                spaceBetween: 30,
                },
                768: {
                spaceBetween: 20,
                }
            }}
            >

            {/* PER CARD */}
            <SwiperSlide className='swiper-cat-prod bg-white border-gray-200 border-2 rounded-2xl shadow-xl my-10 ms-3'> 
                <div className='flex justify-between py-5 px-2'>
                    <span className='text-sm'>#ID 001</span>
                    <span className='text-sm'>update 25 march 2023</span>
                </div>
                <div className=''>
                    <img src={v1} alt="" className="w-full h-80 object-cover" />
                </div>

                <div className="m-10">
                    <h1 className='text-3xl'>Villa Anonymous</h1>
                    <div className='mt-3'>
                        <span className='text-sm flex'><FiMapPin className='mr-3'></FiMapPin> Canggu, bali</span>
                    </div>
                    <div>
                        <component.Button label="Order Now" btn="ordernow" />
                    </div>
                    <p className='text-black text-xs md:text-base mt-8'>
                        A cozy 2 bedroom villa in a peaceful area of Tumbak Bayuh is available for both monthly and yearly rental. Boasts 2 en-suite bedrooms, an open living space, an equipped . . . . 
                    </p>
                    <div className='flex justify-between items-center mt-12'>
                        <span>
                            <FiHeart className='text-4xl'></FiHeart>
                        </span>
                        <component.Button label="See Detail" btn="seedetail" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-cat-prod bg-white border-gray-200 border-2 rounded-2xl shadow-xl my-10 ms-3'> 
                <div className='flex justify-between py-5 px-2'>
                    <span>#ID 001</span>
                    <span>update 25 march 2023</span>
                </div>
                <div className=''>
                    <img src={v1} alt="" className="w-full h-80 object-cover" />
                </div>

                <div className="m-10">
                    <h1 className='text-3xl'>Villa Anonymous</h1>
                    <div className='mt-3'>
                        <span className='text-sm flex'><FiMapPin className='mr-3'></FiMapPin> Canggu, bali</span>
                    </div>
                    <div>
                        <component.Button label="Order Now" btn="ordernow" />
                    </div>
                    <p className='text-black text-xs md:text-base mt-8'>
                        A cozy 2 bedroom villa in a peaceful area of Tumbak Bayuh is available for both monthly and yearly rental. Boasts 2 en-suite bedrooms, an open living space, an equipped . . . . 
                    </p>
                    <div className='flex justify-between items-center mt-12'>
                        <span>
                            <FiHeart className='text-4xl'></FiHeart>
                        </span>
                        <component.Button label="See Detail" btn="seedetail" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-cat-prod bg-white border-gray-200 border-2 rounded-2xl shadow-xl my-10 ms-3'> 
                <div className='flex justify-between py-5 px-2'>
                    <span>#ID 001</span>
                    <span>update 25 march 2023</span>
                </div>
                <div className=''>
                    <img src={v1} alt="" className="w-full h-80 object-cover" />
                </div>

                <div className="m-10">
                    <h1 className='text-3xl'>Villa Anonymous</h1>
                    <div className='mt-3'>
                        <span className='text-sm flex'><FiMapPin className='mr-3'></FiMapPin> Canggu, bali</span>
                    </div>
                    <div>
                        <component.Button label="Order Now" btn="ordernow" />
                    </div>
                    <p className='text-black text-xs md:text-base mt-8'>
                        A cozy 2 bedroom villa in a peaceful area of Tumbak Bayuh is available for both monthly and yearly rental. Boasts 2 en-suite bedrooms, an open living space, an equipped . . . . 
                    </p>
                    <div className='flex justify-between items-center mt-12'>
                        <span>
                            <FiHeart className='text-4xl'></FiHeart>
                        </span>
                        <component.Button label="See Detail" btn="seedetail" />
                    </div>
                </div>
            </SwiperSlide>





            </Swiper>
        </div>
    </Container>
  )
}

export default CategoryProduct