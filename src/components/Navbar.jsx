import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { IoBookSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import avatarImg from "../assets/avatar.png"
import { useSelector } from 'react-redux'
import { useAuth } from '../context/AuthContext';


const navigation = [
  {name:"Dashboard", href: "/dashboard"},
  {name:"Orders", href: "/Orders"},
  {name:"Cart Page", href: "/cart"},
  {name:"Check Out", href: "/checkout"},
]

const Navbar = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const cartItems = useSelector(state => state.cart.cartItems);

const {currentUser, logout} =useAuth()

const handleLogout = () =>{
  logout()
}
  return (

    <header className='max-w-screen-2xl mx-auto px-4 navbar' style={{paddingTop:'0px'}} >
      <nav className='flex justify-between items-center'>
        <div className='flex items-center md:gap-16 gap-4' >
          <Link to="/">
            {/* <IoBookSharp className='size-8' /> */}
            <img src="/logo.png" alt="" className='' style={{width:'100px'}} />
          </Link>
          <div className=' search relative sm:w-72 w-40 space-x-2'>
            <IoIosSearch className='absolute inline-block left-3 inset-y-2' />
            <input type='text' placeholder='Search Here' className='bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none' />
          </div>
        </div>

        <div className='relative flex items-center md:space-x-3 space-x-2'>
          <div>
            {

              currentUser ? <>
                <button onClick={()=> setIsDropDown(!isDropDown)}>
                  <img src={avatarImg} alt="" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500':''}`}/>
                </button>
                {
                  isDropDown && (
                    <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40'>
                      <ul className='py-2'>
                        {
                          navigation.map((item)=>(
                            <li key={item.name} onClick={()=>setIsDropDown(false)}>
                              <Link to={item.href} className='block px-4 py-2 text-sm hover:bg-gray-100'>
                                {item.name}
                              </Link>
                            </li>
                          ))
                        }
                        <li>
                          <button className='block px-4 py-2 text-sm hover:bg-gray-100' onClick={handleLogout}> Logout</button>
                        </li>
                      </ul>
                    </div>
                  )
                }
              </>

                : <Link to='/login'><FaCircleUser className='size-6' /></Link>
            }
          </div>
          <button className=' sm:block'>
            <FaRegHeart className='size-6' />
          </button>
          <Link to="/cart" className='p-1 sm:px-6 px-2 flex items-center btn' style={{ borderRadius: '10px' }}>
            <FiShoppingCart className='' />
            {
              cartItems.length > 0 ?  <span className='text-sm font-semibold sm:ml-1'>{cartItems.length}</span> : <span className='text-sm font-semibold sm:ml-1'>0</span>
            }
            
           
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
