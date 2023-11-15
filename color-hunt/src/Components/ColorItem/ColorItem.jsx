import React, { useState } from 'react'

const ColorItem = ({ color}) => {
    const [isCopied, setIsCopied] =useState(false)
    const handleCopyColor = async (color) =>{
        setIsCopied(true)
        try{
          await navigator.clipboard.writeText(color)
        }
        catch(error){
          console.error(error)
        }
      } 
    const handleLeaveFormColor = () =>{
        setIsCopied(false)
    }
  return (
    <div  
    style={{backgroundColor: color}} 
    className='color'
    onMouseLeave={handleLeaveFormColor}
    >
        <span onClick={() =>handleCopyColor(color)}>
            {isCopied ? 'Copied' : color}
        </span>
  </div>
  )
}

export default ColorItem