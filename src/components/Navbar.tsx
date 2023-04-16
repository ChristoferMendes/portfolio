import React, { useState } from 'react'

import { styles } from '../styles'
import { logo, menu, close } from '../assets'
import { Link } from 'react-router-dom'
import { NavItems } from './NavItems/'
import { NavLinksSmallDevices } from './NavLinksSmallDevices'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to={'/'} className='flex items-center gap-2' onClick={() => {
          setActive('')
          window.scrollTo(0, 0)
        }}>

          <img src={logo} alt='logo' className='w-14 h-14 rounded-full bg-slate-300' />
          <p className='text-white text-[18px] font-bold cursor-pointer'>
            Christofer Mendes &nbsp;
            <span className='sm:block hidden text-secondary'>| Web and Native Developer</span>
          </p>
        </Link>
        <NavItems />
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-8 h-8 object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`
          ${!toggle ? 'hidden' : 'flex'} 
          p-6 absolute top-20 right-0 mx-4 my-2 bg-black-100 min-w-[140px] z-10 rounded-xl`}
          >
            <NavLinksSmallDevices setToggle={setToggle}/>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar