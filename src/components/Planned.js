import React, {useEffect, useState} from 'react'

const Planned = () => {
const [tours, setTours] =useState([])

useEffect(() => {
    fetch(` http://localhost:3001/tours`)
    .then(res => {
        if(res.ok){
            return res.json()
        }
    })
    .then(data => {
        console.log(data)
        setTours(data)
    })
}, [])
  return (
    <div name="planned" className='w-full h-screen mx-auto mt-32'>
        <div className='flex justify-center mb-12'>
             <h2 className='text-6xl font-thin border-b-4 border-[var(--primary)] pb-5 '>LINED<span className='font-bold pl-3'>UP</span></h2>
        </div>
        <div className='flex text-2xl justify-center mb-4'>
            <p>Our Upcoming Tours</p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-rows-none gap-4 px-2'>
          {tours.map((tour, index) => (
            <div key={index} className="xl:w-[600px] xl:gap-4 relative group">
                <img src={tour.url} alt="tour"/>
                <p className='absolute top-5 left-5 font-bold group-hover:text-[var(--default)]'>{tour.tourName}</p>
                <p className='absolute right-5 bottom-14'>{tour.date}</p>
                <p className='absolute right-5 bottom-7'>{tour.length}</p>
                <div className='absolute top-0 left-0 w-full h-full bg-slate-100/50 hover:scale-90 duration-700 hover:bg-slate-900/30'></div>
            </div>
          ))} 
        </div>
    </div>
  )
}

export default Planned