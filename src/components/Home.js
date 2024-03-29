import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import {MdOutlineKeyboardArrowUp} from 'react-icons/md'

const Home = () => {
const [currentIndex, setCurrentIndex] = useState(0)
const [showButton, setShowButton] = useState(false);

const images = [
    {url: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-3601425.jpg&fm=jpg"}, 
    {url: "https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg?cs=srgb&dl=pexels-elina-fairytale-3807571.jpg&fm=jpg"},
    {url: "https://cdn1.tablethotels.com/media/ecs/global/email/assets/20200402_Zoom/TabletHotels_SublimeSamana-Mirrored.jpg"}, 
    {url: "https://img.freepik.com/premium-photo/happy-family-playing-swimming-pool-summer-vacation-concept_488220-16272.jpg?w=2000"},
    {url: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-457882.jpg&fm=jpg"}, 
    {url: "http://www.themeenergy.com/themes/html/book-your-travel/images/uploads/slider3.jpg"}, 
    {url: "https://bluemarblevagabonds.com/wp-content/uploads/2020/07/DSC_4738.jpg"}, 
    {url: "http://www.themeenergy.com/themes/html/book-your-travel/images/uploads/hotel2.jpg"}
 
    
]

useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const threshold = 100;

      setShowButton(scrollTop > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1? 0 : prevIndex + 1))
    }, 7000)
    return () => clearInterval(interval)
    
}, [])
  return (
    <div name='home' className='w-full h-screen relative overflow-hidden'>
    <div className='w-full h-screen '>
            {images.map((image, index) => (
                <div
                key={index}
                className={`absolute transition-all duration-7000 ${index === currentIndex? 'opacity-100 scale-100' : 'opacity-0 scale-110'} w-full h-full bg-center bg-cover`}
                style={{backgroundImage: `url(${image.url})`}}
                ></div>
            ))}
    </div>
    <div className='absolute top-0 left-0 w-full h-full bg-gray-900/30'></div>
    <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-center text-center text-[var(--default)]'>
        <div className='flex max-w-[1240px] mx-auto'>
            <h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>Enjoy Vacation with</h1>
            <h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl ml-4 text-[var(--primary)]'>Travels</h1>
        </div>
        <div className='my-2'>
            <h2>Travel to any corner of the world without going around in circles!</h2>
        </div>
        <div className='group'>
            <button className='p-5 text-3xl font-semibold rounded-md hover:text-gray-300 hover:bg-white'><a href='/new'>Book a Trip</a></button>    
        </div>
    </div>
    <div className={`bottom-0 right-2 fixed z-10 ${showButton ? 'block' : 'hidden'}`}>
        <button className='font-bold text-[var(--default)] bg-[var(--primary)] rounded-full hover:rounded-full hover:bg-[var(--secondary)] hover:cursor-pointer animate-bounce text-6xl'><Link to="home" smooth={true} duration={700}><MdOutlineKeyboardArrowUp title = "Back to Top"/></Link></button>
    </div>
    </div>
    
  )
}

export default Home