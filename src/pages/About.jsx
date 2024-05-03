import React, {useContext} from 'react';
import WomanImg from '../img/woman.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transition.js';
//import cursor context
import { CursorContext } from '../context/CursorContext';


const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'
      >

      <div 
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="container mx-auto h-full relative">

        <div className='flex flex-col lg:flex-row h-full 
      items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16 '>

          <div className='flex-1 max-h-96 lg:max-h-max order-2
        lg:order-none overflow-hidden'>
            <img src={WomanImg} alt="" className='lg:h-[470px] lg:w-[370px] 
            lg:ml-24 '/>
          </div>

          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex-1 pt-[5rem] pb-[1.5rem] lg:pt-14 lg:pb-0 lg:w-auto z-10
          flex flex-col justify-center items-center lg:items-start lg:mr-[160px]'
          >

            <h1 className='h1'>About</h1>
            <p className='mb-8 max-w-sm'>Lorem ipsum dolor sit amet consectetur.
              <b> Voluptate beatae</b> aliquam quibusdam perspiciatis beatae quibusdam.
              <br />
              <br />
              Asperiores sreprehenderitrem beatae aliquam quibusdam omnis.
            </p>

            <Link to={'/portfolio'} className='btn'>View my work</Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default About