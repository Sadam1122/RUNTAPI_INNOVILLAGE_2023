'use client';
import { Carousel } from 'flowbite-react';
import Video from '../assets/video.mov';
// import Img from '../assets/banner.png'

const Banner  = () => {

    return (
        <Carousel slide={false} className='bg-black'>
            <video src={Video} autoPlay loop muted></video>
            {/* <img src={Img1} className='h-full w-full rounded-none' alt="..." /> */}
        </Carousel> 
    )
}

export default Banner