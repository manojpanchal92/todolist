import React from 'react'
import image from './Images/01.jpg';
import './Header.css';


const Header = () => {
  return (
    <div className='headerimage'>
        <img src={image} />
    </div>
  )
}

export default Header