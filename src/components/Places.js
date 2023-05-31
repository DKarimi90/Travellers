import React from 'react'

const Places = () => {
  return (
    <div className='w-full h-full'>
        <div className='flex flex-col w-full h-full max-w-[1240px] mx-auto justify-center items-center my-32'>
            <div>
              <h1 className='font-[Montserrat] font-thin uppercase border-b border-gray-400 pb-4 text-2xl' >Around the World</h1>
            </div>
            <div className='mt-16 flex flex-col text-center'>
              <h2 className='text-7xl'>It's time to <span className='text-[var(--primary)]'>travel</span></h2>
              <p className='text-2xl py-6 leading-10'>Take a look at the most exclusive & most visited locations in the world - hand-picked just for you. Start traveling the world today!</p>
            </div>
        </div>
    </div>
  )
}

export default Places