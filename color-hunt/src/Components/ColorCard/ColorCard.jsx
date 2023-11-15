import React from 'react'
import { GoHeart } from "react-icons/go";
const ColorCard = ({color}) => {
  return (
    <div className='colorCard'>
      {color.colors.map((color, index) => 
        <div key={index}>
          <span>{color}</span>
        </div>
      )}
      <div>
        <button><GoHeart/>{color.likes}</button>
        <span>{color.date}</span>
      </div>

    </div>
  )
}

export default ColorCard