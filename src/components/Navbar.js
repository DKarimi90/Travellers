import { useState, useEffect } from 'react'
import {BsSearch, BsPerson, BsFacebook, BsInstagram, BsTwitter, BsTelegram, BsPinterest} from 'react-icons/bs'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
const [nav, setNav] = useState(false)
const [logo, setLogo] = useState(false)
const [scroll, setScroll] = useState(false)
const handleToggle = () => {
  setNav(!nav)
  setLogo(!logo)
}

useEffect(() => {
  const handleScroll = () => {
    if(window.scrollY> 0) {
      setScroll(true)
    }
    else {
      setScroll(false)
    }
  }
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])


  return (
    <div className={`w-full h-32 fixed z-10 ${scroll? 'bg-gray-900 text-[var(--default)]': ''}`}>
        <div className='w-full flex max-w-[1240px] mx-auto justify-between items-center h-full px-4'>
        <div onClick={handleToggle} >
          <h1 className={logo? 'hidden': 'block'}>TRAVELS.</h1>
        </div>
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>Places</li>
            <li>Agency</li>
            <li>Gallery</li>
            <li>Testimonials</li>
            <li>NewsLetter</li>
        </ul>
        <div className='hidden md:flex'>
          <BsPerson size={20} className="mr-3"/>
          <BsSearch size={20} />
        </div>

        {/* MOBILE MENU */}
        <div onClick={handleToggle} className="md:hidden z-10">
           {nav? <AiOutlineClose size={20} className="text-[var(--default)]"/>: <AiOutlineMenu size={20}/>}
        </div>
        <div className={nav? 'absolute top-0 left-0 py-12 px-4 w-full md:hidden bg-gray-900 text-[var(--default)]': 'hidden left-[-100%]'}>
          <ul>
            <h1>TRAVELS.</h1>
            <li className='py-3 text-xl border-b border-gray-100'>Home</li>
            <li className='py-3 text-xl border-b border-gray-100'>Places</li>
            <li className='py-3 text-xl border-b border-gray-100'>Agency</li>
            <li className='py-3 text-xl border-b border-gray-100'>Gallery</li>
            <li className='py-3 text-xl border-b border-gray-100'>Testimonials</li>
            <li className='py-3 text-xl border-b border-gray-100'>NewsLetter</li>
            <div className='flex flex-col my-4 w-full'>
              <button className='my-2 p-2 rounded  font-bold'>Account</button>
              <button className='my-2 p-2 rounded  font-bold'>Search</button>
            </div>
            <div className='flex my-6 justify-evenly'>
              <BsFacebook className='icon'/>
              <BsInstagram className='icon'/>
              <BsPinterest className='icon'/>
              <BsTelegram className='icon'/>
              <BsTwitter className='icon'/>
            </div>
          </ul>
        </div>
        </div>
    </div>
  )
}

export default Navbar