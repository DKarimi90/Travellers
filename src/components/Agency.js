import React from 'react'
import {BsCamera2} from 'react-icons/bs'

const Agency = () => {
  return (
    <div name="agency" className='w-full h-full relative'>
        <div className=''><video src='videos/3.mp4'autoPlay loop muted/></div>
        <div className='absolute top-0 left-0 bg-slate-900/40 w-full h-full'></div>
        <div className='absolute w-full h-full top-0 left-0 flex flex-col justify-center text-center'>
          <div className='flex flex-col'>
            <div className='mb-4'>
            <h className=" text-white text-2xl xl:text-5xl border-b border-[var(--secondary)] pb-3 font-semibold italic">Discovering the World</h>
            </div>
            <div className='max-w-[700px] mx-auto text-[var(--default)] md:text-3xl my-4 lg:my-8 xl:my-16'>
            <p><span className='font-bold text-[var(--secondary)]'>TRAVEL</span> is a premier tour company dedicated to providing exceptional travel experiences to adventurous individuals and families. With a passion for exploration and a commitment to creating unforgettable memories, we offer a wide range of meticulously crafted tours and itineraries to some of the most captivating destinations around the globe.</p>
            </div>
            <div className='flex justify-center'>
               <button onClick={() => window.scrollTo(0, 0)} className='px-5 py-3 flex items-center font-semibold text-2xl rounded'><span><BsCamera2 size={30} className="text-[#000] mr-5 animate-pulse"/></span>More</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Agency