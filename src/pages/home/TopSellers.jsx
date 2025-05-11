import React, {  useState } from 'react'
import { FaElementor } from 'react-icons/fa6';
import BookCard from './books/BookCard';
const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"];
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Pagination, Navigation} from 'swiper/modules'
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';


const TopSellers = () => {
    const [selectedCategory,setSelectedCategory]= useState("Choose a genre");
    const {data: books = []} = useFetchAllBooksQuery();

    const filteredBooks = selectedCategory === "Choose a genre"? books: books.filter(book=>book.category === selectedCategory.toLowerCase());
    
  return (
    <div className='py-10'>
      <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>

      <div className='mb-8 flex items-center'>
        <select 
        onChange={(e) => setSelectedCategory(e.target.value)}
        name="category" id="category" className='border bg-[#EAEAEA] border-grey-300 rounded-md px-4' style={{padding:'5px',textAlign:'center'}}>
            {
                
                    categories.map((category,index)=>(
                        <option key={index} value={category}>{category}</option>
                    ))
                
            }
        </select>

      </div>
      <div >
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
       filteredBooks.length>0 && filteredBooks.map((book,index)=>(
          <SwiperSlide key={index} style={{width:'500px', height:'270px', paddingLeft:'50px', paddingRight:'55px' }}>
             <BookCard key={index} book={book}/>
          </SwiperSlide>
         
        ))
      }
      
        
      </Swiper>
     
      </div>
    </div>
  )
}

export default TopSellers
