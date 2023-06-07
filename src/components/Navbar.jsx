import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
      <div className='flex justify-between items-center h-16 md:h-24   max-w-[1240px] mx-auto px-4 text-zinc-800'>
        <Link to="/"><h1 className='w-full text-4xl text-zinc-800 hover:text-gray-500 font-link'>Chorus<span className="text-3xl font-['gothic']">RGV</span></h1></Link>
        <ul className='hidden md:flex whitespace-nowrap items-center'>
          <>
          <Link to='/' className='px-4 py-2 rounded-lg hover:bg-zinc-800 hover:text-white'>Home</Link>
          <Link to='/about' className='px-4 py-2 rounded-lg hover:bg-zinc-800 hover:text-white'>About Us</Link>
          <Link to='/concerts' className='px-4 py-2 rounded-lg hover:bg-zinc-800 hover:text-white'>Concert Season</Link>
          <Link to='/support' className='px-4 py-2 rounded-lg hover:bg-zinc-800 hover:text-white'>Support & Tickets</Link>
          <Link to='/sponsors' className='px-4 py-2 rounded-lg hover:bg-zinc-800 hover:text-white'>Event Sponsors & Patrons</Link>
          {/* <Link to='/recordings' className='px-4 py-2 rounded-lg hover:bg-zinc-800 hover:text-white'>Recordings</Link> */}
          <Link to='/contact' className='px-4 py-2 rounded-lg hover:bg-zinc-800 hover:text-white'>Contact Us</Link>
          </>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r bg-white ease-in-out duration-500': 'fixed left-[-100%]'}>
        <Link to="/"><h1 className='w-full text-4xl text-zinc-800 ml-4 mt-7 font-link'>Chorus<span className="text-3xl font-['gothic']">RGV</span></h1></Link>
          <ul onClick={handleNav} className='uppercase p-4'>
          <Link to="/" className='p-2 flex border-b border-gray-800 font-medium hover:text-[#6A0DAD]'>Home</Link>
          <Link to="/about" className='p-2 flex border-b border-gray-800 font-medium hover:text-[#6A0DAD]'>About</Link>
          <Link to="/concerts" className='p-2 flex border-b border-gray-800 font-medium hover:text-[#6A0DAD]'>Concert Season</Link>
          <Link to="/support" className='p-2 flex border-b border-gray-800 font-medium hover:text-[#6A0DAD]'>Support & Tickets</Link>
          <Link to="/sponsors" className='p-2 flex border-b border-gray-800 font-medium hover:text-[#6A0DAD]'>Event Sponsors & Patrons</Link>
          {/* <Link to="/recordings" className='p-2 flex border-b border-gray-800 font-medium hover:text-[#6A0DAD]'>Recordings</Link> */}
          <Link to="/contact" className='p-2 flex border-b border-gray-800 font-medium hover:text-[#6A0DAD]'>Contact Us</Link>
          </ul>
        </div>
      </div>
  )
}

export default Navbar