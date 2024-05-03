import React, { useContext } from 'react';
import Image1 from '../img/1.png';
import Image2 from '../img/2.png';
import Image3 from '../img/3.png';
import Image4 from '../img/4.png';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transition.js';
//import cursor context
import { CursorContext } from '../context/CursorContext';


const Gallery = () => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

    return (
      <motion.section
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '100%' }}
        transition={transition1}
        className='section'
      >
        <div className="container mx-auto h-full relative">
  
          <div className='flex flex-col lg:flex-row h-full 
        items-center justify-center gap-x-24 text-center lg:text-left lg:pt-36 
          pt-[4rem] pb-[1.5rem]'
          >
  
            <motion.div
              initial={{ opacity: 0, y: '-80%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-80%' }}
              transition={transition1}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className='flex flex-col lg:items-start'
            >
  
              <h1 className='h1'>Gallery</h1>
  
              <p className='mb-[1.5rem] max-w-sm'>Lorem ipsum dolor sit amet consectetur.
                <b> Voluptate beatae</b> aliquam quibusdam perspiciatis beatae quibusdam.
                <br />
                <br />
                Asperiores sreprehenderitrem beatae aliquam quibusdam perspiciatis
                omnis.
              </p>
  
              <Link to={'/gallery'} className='btn mb-[40px] mx-auto lg:mx-0'>
                Book a session</Link>
  
            </motion.div>
  
            <div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className='grid grid-cols-2 lg:gap-2'>
  
              <div className='max-w-[250px] lg:max-w-[280px] h-[180px]
            lg:h-[180px] bg-accent overflow-hidden '>
                <img className='object-cover h-full lg:h-[220px] 
              hover:scale-110 transition-all duration-500'
                  src={Image1} alt="" />
              </div>
  
              <div className='max-w-[250px] lg:max-w-[280px] h-[180px]
            lg:h-[180px] bg-accent overflow-hidden '>
                <img className='object-cover h-full lg:h-[220px] 
              hover:scale-110 transition-all duration-500'
                  src={Image2} alt="" />
              </div>
  
            <div className='max-w-[250px] lg:max-w-[280px] h-[180px]
            lg:h-[180px] bg-accent overflow-hidden '>
                <img className='object-cover h-full lg:h-[220px] 
              hover:scale-110 transition-all duration-500'
                  src={Image3} alt="" />
              </div>
  
              <div className='max-w-[250px] lg:max-w-[280px] h-[180px]
            lg:h-[180px] bg-accent overflow-hidden '>
                <img className='object-cover h-full lg:h-[220px] 
              hover:scale-110 transition-all duration-500'
                  src={Image4} alt="" />
              </div> 
            </div>
          </div>
        </div>
      </motion.section>
    );

}

export default Gallery