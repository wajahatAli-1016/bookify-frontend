import React from 'react'
import banner from "../../assets/banner.png"
import './Banner.css'
const Banner = () => {
    return (
        <div className=' md:flex-row py-16 justify-between items-center gap-12 container' style={{display:'flex'}}>
            <div className='md:w-1/2 w-full'>
                <h1 className='md:text-5xl text-2xl font-medium mb-7'>New Releases This Week</h1>
                <p className='mb-10'>It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memories, this week's new releases offer something for everyone</p>
                <button style={{ padding: '5px 28px 5px 28px',fontWeight:'600', borderRadius: '10px' , cursor:'pointer'}} className='btn'>Subscribe</button>

            </div>

            <div className='md:w-1/2 w-full flex items-center md:justify-end'>
                <img src={banner} alt="" style={{width:'400px',marginRight:'100px'}}/>
            </div>
        </div>
    )
}

export default Banner