import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs';
 import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
        <div>
            <BsTwitter />
        </div>
      </a>
      <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
        <div>
            <FaFacebookF />
        </div>
      </a>
      <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
        <div>
            <BsInstagram />
        </div>
      </a>
    </div>
  )
}

export default SocialMedia