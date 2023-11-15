import React from 'react'
import { GoHeart } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";
const Header = () => {
  return (
    <header>
        <h2 className='icon'>Color Hunt</h2>
        <div className='search'>
            <IoSearch  className='busqueda-icon'/>
            <input placeholder='Search palettes' />
        </div>
        <a className='support'>
            <GoHeart/>
            Support Color Hunt
        </a>
        <button className='menu'>
            <SlOptions/>
        </button>
    </header>
  )
}

export default Header