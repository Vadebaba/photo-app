import { useEffect, useState } from "react";
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg'

import { Link } from "react-router-dom";
import { motion } from "framer-motion";


//menu variants
const menuVariants = {
  hidden: {
    x: '100%'
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.09],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    document.addEventListener('mousedown', () => {
      setOpenMenu(false)
    });
  });

  return (
    <nav className="text-primary xl:hidden">

      <div onClick={() => setOpenMenu(true)}
        className="text-3xl cursor-pointer">
        <CgMenuRight />
      </div>

      <motion.div
        variants={menuVariants}
        initial='hidden'
        animate={openMenu ? 'show' : ''}
        className="bg-white shadow-2xl w-full absolute top-0 
        right-0 max-w-xs h-screen z-20">

        <div onClick={() => setOpenMenu(false)}
          className="text-4xl absolute z-30 right-[1.5rem] top-6 
        text-primary cursor-pointer">
          <IoMdClose />
        </div>

        <ul className="h-full flex flex-col justify-center items-center
      gap-y-8 text-primary font-primary font-bold text-3xl">
          <li>
            <Link to={'/'}>Home</Link>
          </li>

          <li>
            <Link to={'/about'}>About</Link>
          </li>

          <li>
            <Link to={'/gallery'}>Gallery</Link>
          </li>

          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>
        </ul>
      </motion.div>
    </nav>

  )
}

export default MobileNav