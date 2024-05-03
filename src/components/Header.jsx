import React, {useContext} from 'react'
import Logo from '../assets/rh-logo.png'
import Socials from './Socials'
import MobileNav from './MobileNav'
import { Link } from 'react-router-dom'
//import cursor context
import { CursorContext } from '../context/CursorContext';


const Header = () => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);


  return <header className='fixed w-full px-[30px] z-30
  lg:px-[100px] h-[70px] lg:h-[100px] flex items-center'>
    <div className='flex flex-col lg:flex-row lg:items-center 
    w-full justify-between'>

      <Link      
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
       to={'/'} className='max-w-[200px]'>
        <img src={Logo} alt="" className='h-[50px] w-[55px]' />
      </Link>

      <nav      
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className='hidden xl:flex gap-x-12 font-semibold'>
        <Link to={'/'} className='text-[#696c6d] hover:text-primary
        transition '>Home</Link>

        <Link to={'/about'} className='text-[#696c6d] hover:text-primary
        transition '>About</Link>

        <Link to={'/gallery'} className='text-[#696c6d] hover:text-primary
        transition '>Gallery</Link>

        <Link to={'/contact'} className='text-[#696c6d] hover:text-primary
        transition '>Contact</Link>
      </nav>
    </div>

    <Socials />

    <MobileNav />

  </header >

}

export default Header