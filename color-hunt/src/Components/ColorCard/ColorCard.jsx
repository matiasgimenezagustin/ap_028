import React, { useState } from 'react'
import { GoHeart, GoHeartFill } from "react-icons/go";
import ColorItem from '../ColorItem/ColorItem';
const ColorCard = ({color}) => {

  const [isLiked, setIsLiked] = useState(false)
  const [likes, setLikes ] = useState(color.likes)
  const handleLikeCard = () =>{
    isLiked ? setLikes(likes - 1) : setLikes(likes + 1)
    setIsLiked(!isLiked)
    
  }
  return (
    <div className='colorCard'>
      <div className='colorList'>
        {color.colors.map((color, index) => (
          <ColorItem color={color} key={index} />
        ))}
      </div>
      
      <div className='colorCardInfo'>
        <button onClick={handleLikeCard}>
          {
            isLiked 
            ? <GoHeartFill className='iconLike'/>
            :  <GoHeart className='iconLike'/>
           
          }
        {likes}
        </button>
        <span>{color.date}</span>
      </div>

    </div>
  )
}

export default ColorCard