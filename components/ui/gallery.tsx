import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css"
import "swiper/css/pagination"
import { Pagination,Autoplay } from 'swiper/modules'
import { galleryImages } from '@/data'
import Image from 'next/image'

export default function Gallery() {
  return (
    <div className='h-[550px] sm:h-[650px] md:h-full 2xl:h-[750px] w-full  '>
          <Swiper modules={ [Pagination, Autoplay]}
              pagination={{ clickable:true }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              className='mySwiper rounded-3xl '
          >
              {
                  galleryImages.map((img) => (
                      <SwiperSlide key={img.id}>
                          <Image src={img.img} alt="image" />
                      </SwiperSlide>
                  ))
              }
      </Swiper>
    </div>
  )
}
