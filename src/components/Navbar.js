import { useState, useEffect } from 'react'
import {BsSearch, BsPerson, BsFacebook, BsInstagram, BsTwitter, BsTelegram, BsPinterest} from 'react-icons/bs'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-scroll'

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
    <div className={`w-full h-32 fixed z-20 ${scroll? 'bg-gray-900 text-[var(--default)]': ''}`}>
        <div className='w-full flex max-w-[1240px] mx-auto justify-between items-center h-full px-4'>
        <div>
          <h1 className={logo? 'hidden': 'block'}><Link to="home" className='cursor-pointer text-[var(--primary)] border-b border-[var(--primary)] lg:text-2xl'>TRAVELS.</Link></h1>
        </div>
        <ul className='hidden md:flex'>
            <li><Link to="home" smooth={true} duration={500} className="cursor-pointer">Home</Link></li>
            <li><Link to="destinations" smooth={true} duration={500} className="cursor-pointer">Destinations</Link></li>
            <li><Link to="agency" smooth={true} duration={500} className="cursor-pointer">Agency</Link></li>
            <li><Link to="testimonials" smooth={true} duration={500} className="cursor-pointer">Testimonials</Link></li>
            <li><Link to="planned" smooth={true} duration={500} className="cursor-pointer">Planned</Link></li>
            <li><Link to="newsletter" smooth={true} duration={500} className="cursor-pointer">NewsLetter</Link></li>
        </ul>
        <div className='hidden md:flex text-[var(--primary)]'>
          <BsPerson size={20} className="mr-3 hover:cursor-pointer" />
          <BsSearch size={20} className="hover:cursor-pointer" />
        </div>

        {/* MOBILE MENU */}
        <div onClick={handleToggle} className="md:hidden z-10">
           {nav? <AiOutlineClose size={20} className="text-[var(--default)]"/>: <AiOutlineMenu size={20}/>}
        </div>
        <div className={nav? 'absolute top-0 left-0 py-12 px-4 w-full md:hidden bg-gray-900 text-[var(--default)]': 'hidden left-[-100%]'}>
          <ul>
            <h1>TRAVELS.</h1>
            <li className='li-mobile'><Link onClick={handleToggle} to="home" smooth={true} duration={500} className="cursor-pointer">Home</Link></li>
            <li className='li-mobile'><Link onClick={handleToggle} to="destinations" smooth={true} duration={500} className="cursor-pointer">Destinations</Link></li>
            <li className='li-mobile'><Link onClick={handleToggle} to="agency" smooth={true} duration={500} className="cursor-pointer">Agency</Link></li>
            <li className='li-mobile'><Link onClick={handleToggle} to="testimonials" smooth={true} duration={500} className="cursor-pointer">Testimonials</Link></li>
            <li className='li-mobile'><Link onClick={handleToggle} to="planned" smooth={true} duration={500} className="cursor-pointer">Planned</Link></li>
            <li className='li-mobile'><Link onClick={handleToggle} to="newsletter" smooth={true} duration={500} className="cursor-pointer">NewsLetter</Link></li>
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