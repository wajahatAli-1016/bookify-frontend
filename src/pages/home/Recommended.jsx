import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Pagination, Navigation} from 'swiper/modules'
import BookCard from './books/BookCard';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';


const Recommended = () => {
       const {data: books = []} = useFetchAllBooksQuery();
   
  return (
    <div className='py-16'>
        <h2 className='text-3xl font-semibold mb-6'>Recomended Books</h2>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        
       
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
         {
       books.length>0 && books.slice(8,16).map((book,index)=>(
          <SwiperSlide key={index} style={{width:'500px', height:'270px', paddingLeft:'50px', paddingRight:'55px'}}>
             <BookCard key={index} book={book}/>
          </SwiperSlide>
         
        ))
      }
      
        
      </Swiper>
    </div>
  )
}

export default Recommended
