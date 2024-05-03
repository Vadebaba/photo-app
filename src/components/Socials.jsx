import React,{useContext} from 'react';
import { ImFacebook, ImTwitter, ImInstagram, ImYoutube } from 'react-icons/im'
//import cursor context
import { CursorContext } from '../context/CursorContext';

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);


  return (

  <div className='hidden xl:flex ml-24'
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
  >
    <ul className='flex gap-x-4'>
      
      <li><a href="http://facebook.com" target='_blank'>
        < ImFacebook/>
        </a></li>

      <li><a href="http://x.com" target='_blank'>
      < ImTwitter/>
        </a></li>

      <li><a href="http://instagram.com" target='_blank'>
      < ImInstagram/>
        </a></li>

      <li><a href="http://youtube.com" target='_blank'>
      < ImYoutube/>
        </a></li>
    </ul>

  </div>
  );
}

export default Socials