import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { getImgUrl } from '../../../utils/gettingUrl'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/features/cart/cartSlice'

const BookCard = ({ book }) => {
    const dispatch = useDispatch();

    const handleAddToCart = (product) =>{
        dispatch(addToCart(product))
    }
    return (
        <div>
            <div style={{display:'flex', objectFit:'cover'}} className='card'>
                <div >
                <Link to={`/books/${book._id}`}  >
                        <img
                            src={`${getImgUrl(book.coverImage)}`}
                            alt=""
                            style={{paddingTop:'20px'}}
                            className="w-full bg-cover p-2 rounded-md  book-img cursor-pointer hover:scale-105 transition-all duration-200"
                           
                        />
                    </Link>
                </div>

                <div >
                    <Link to={`/books/${book._id}`}><h4 className="text-xl hover:text-blue-600 mb-3 card-title">
                            {book?.title.length > 20 ? `${book.title.slice(0, 20)}...` : book?.title}
                        </h4></Link>
                    <p className="text-gray-600 mb-5">{book?.description.length > 30 ? `${book.description.slice(0, 30)}...` : book?.description}</p>
                    <p className="font-medium mb-5">
                        ${book?.newPrice} <span className="line-through font-normal ml-2">${book?.oldPrice}</span>
                    </p>
                    <button onClick={(()=> handleAddToCart(book))} className="btn" style={{backgroundColor:'rgb(52, 202, 195)',display:'flex',borderRadius:'10px'}}>
                        <FiShoppingCart style={{marginTop:'5px'}}/>
                        <span style={{marginLeft:"5px"}}>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BookCard
