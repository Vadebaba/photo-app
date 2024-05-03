import React, { useContext } from 'react';
import womanImg from '../img/woman1.png';
import { motion } from 'framer-motion';
import { transition1 } from '../transition.js';
//import cursor context
import { CursorContext } from '../context/CursorContext';


const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);


  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section bg-white'
    >
      <div className='container h-full mx-auto'>
        <div className='flex flex-col lg:flex-row h-full items-center pt-[7rem] 
      justify-start gap-2 gap-x-8 text-center lg:text-left'>

          <motion.div
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
           transition={transition1}
            className='hidden lg:flex bg-[#eef7f9] absolute bottom-0
        left-0 right-0 top-72 -z-10'>
          </motion.div>

          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='lg:flex-1 lg:pt-32 lg:pl-[8rem]'>
            <h1 className='h1'>Contact me</h1>
            <p className='mb-5'>I would love to get suggestions from you.</p>
            <form className='flex flex-col gap-y-4 '>
              <div className='flex gap-x-10 '>

                <input className='outline-none border-b h-[50px]
                 bg-transparent font-secondary w-full pl-3 
                 placeholder:text-[#757879] border-b-primary'
                  type="text" placeholder='Your name'
                />

                <input className='outline-none border-b h-[50px]
                 bg-transparent font-secondary  w-full pl-3 
               placeholder:text-[#757879] border-b-primary'
                  type="text" placeholder='Your email '
                />
              </div>

              <input className='outline-none border-b h-[50px]
            bg-transparent font-secondary w-full pl-3 
            placeholder:text-[#757879] border-b-primary'
                type="text" placeholder='Your message'
              />
              <button className='btn mb-[30px] mx-auto lg:mx-0 self-start
              '>Send</button>
            </form>
          </div>

          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ transition: transition1, duration: 1.5 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='lg:flex-1 '
          >

            <img src={womanImg} alt=""
              className='lg:w-[77%] pl-[1rem]' />
          </motion.div>
        </div>
      </div>
    </motion.section >
  )
}

export default Contact