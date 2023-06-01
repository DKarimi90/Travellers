import React from 'react'
import { Link } from 'react-scroll'
import {FcGlobe} from 'react-icons/fc'
import {MdLocationOn, MdOutlineExplore} from 'react-icons/md'

const Destinations = () => {
  return (
    <div name="destinations" className='w-full h-full'>
        <div className='flex flex-col w-full h-full max-w-[1240px] mx-auto justify-center items-center lg:my-16'>
            <div>
              <h1 className='font-[Montserrat] font-thin uppercase border-b border-gray-400 pb-4 text-2xl' >Around the World</h1>
            </div>
            <div className=' mt-6 lg:mt-16 flex flex-col text-center'>
              <h2 className='text-7xl'>It's time to <span className='text-[var(--primary)]'>travel</span></h2>
              <p className='text-2xl py-6 leading-10'>Take a look at the most exclusive & most visited locations in the world - hand-picked just for you. Start traveling the world today!</p>
            </div>
            <div className='w-full grid md:grid-cols-2 gap-2 ml-3'>
              <div className=' flex flex-col bg-slate-200 overflow-hidden rounded-sm'>
                <img src="images/Bal.jpg" alt="balicans" className='hover:scale-105 ease-in-out duration-700'/>
                <div className='flex justify-between mt-4 px-5 p-1'>
                  <div>
                    <div className='flex items-center'>
                      <FcGlobe  size={25}/>
                    <h2 className='font-bold text-3xl ml-2'>Balkan</h2>
                    </div>
                    <div className='flex items-center'>
                      <MdLocationOn size={25} />
                      <p className='ml-2'>Soča valley</p>
                    </div>
                  </div>
                <div>
                  <p className='line-through text-[var(--primary)]'>$2000</p>
                  <h2 className='font-semibold'>$1390</h2>
                </div>
                </div>
              </div>
              <div className=' flex flex-col bg-slate-200 overflow-hidden rounded-sm'>
                <img src="images/paris2.jpg" alt="balikan" className='hover:scale-105 ease-in-out duration-700'/>
                <div className='flex justify-between mt-4 px-5 p-1'>
                <div>
                    <div className='flex items-center'>
                      <FcGlobe  size={25}/>
                    <h2 className='font-bold text-3xl ml-2'>France</h2>
                    </div>
                    <div className='flex items-center'>
                      <MdLocationOn size={25} />
                      <p className='ml-2'>Paris</p>
                    </div>
                  </div>
                <div>
                  <p className='line-through text-[var(--primary)]'>$31500</p>
                  <h2 className='font-semibold'>$2300</h2>
                </div>
                </div>
              </div>
              <div className=' flex flex-col bg-slate-200 overflow-hidden rounded-sm'>
                <img src="images/thai2.jpeg" alt="thai" className='hover:scale-105 ease-in-out duration-700'/>
                <div className='flex justify-between mt-4 px-5 p-1'>
                <div>
                    <div className='flex items-center'>
                      <FcGlobe  size={25}/>
                    <h2 className='font-bold text-3xl ml-2'>Thailand</h2>
                    </div>
                    <div className='flex items-center'>
                      <MdLocationOn size={25} />
                      <p className='ml-2'>Phuket</p>
                    </div>
                  </div>
                <div>
                  <p className='line-through text-[var(--primary)]'>$2760</p>
                  <h2 className='font-semibold'>$2280</h2>
                </div>
                </div>
              </div>
              <div className=' flex flex-col bg-slate-200 overflow-hidden rounded-sm'>
                <img src="images/Penang.jpg" alt="penang" className='hover:scale-105 ease-in-out duration-700'/>
                <div className='flex justify-between mt-4 px-5 p-1'>
                <div>
                    <div className='flex items-center'>
                      <FcGlobe  size={25}/>
                    <h2 className='font-bold text-3xl ml-2'>Malaysia</h2>
                    </div>
                    <div className='flex items-center'>
                      <MdLocationOn size={25} />
                      <p className='ml-2'>Penang</p>
                    </div>
                  </div>
                <div>
                  <p className='line-through text-[var(--primary)]'>$3100</p>
                  <h2 className='font-semibold'>$2330</h2>
                </div>
                </div>
              </div>
            </div>
            <div className='my-10'>
              <button onClick={() => window.scrollTo(0, 0)} className='p-4 rounded font-semibold flex items-center'><span><MdOutlineExplore size={35} className="mr-4 text-[#000] animate-spin"/></span>Explore More Places</button>
            </div>
        </div>
    </div>
  )
}

export default Destinations