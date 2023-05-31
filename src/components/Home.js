// import React from 'react'

// const Home = () => {
//   return (
//     <div className='w-full h-screen relative'>
//         <div className='w-full h-full'><video src="videos/2.mp4" alt="beach" className='w-full h-full object-cover' loop muted/></div>
//         <div className='absolute top-0 left-0 bg-gray-900/30 w-full h-full'></div>
//     </div>
    
//   )
// }

// export default Home
import React from 'react'
import { useState, useEffect } from 'react'

const Home = () => {
const [currentIndex, setCurrentIndex] = useState(0)

const images = [
    {url: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-3601425.jpg&fm=jpg"}, 
    {url: "https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg?cs=srgb&dl=pexels-elina-fairytale-3807571.jpg&fm=jpg"},
    {url: "https://cdn1.tablethotels.com/media/ecs/global/email/assets/20200402_Zoom/TabletHotels_SublimeSamana-Mirrored.jpg"}, 
    {url: "https://img.freepik.com/premium-photo/happy-family-playing-swimming-pool-summer-vacation-concept_488220-16272.jpg?w=2000"},
    {url: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-457882.jpg&fm=jpg"}, 
    {url: "http://www.themeenergy.com/themes/html/book-your-travel/images/uploads/slider3.jpg"}
 
    
]

useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1? 0 : prevIndex + 1))
    }, 7000)
    return () => clearInterval(interval)
}, [])
  return (
    <div className='w-full h-screen relative overflow-hidden'>
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
            <h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl ml-4 text-[#ff0a54]'>Travels</h1>
        </div>
        <div>
            <h2>Travel to any corner of the world without going around in circles!</h2>
        </div>
    </div>
    </div>
    
  )
}

export default Home