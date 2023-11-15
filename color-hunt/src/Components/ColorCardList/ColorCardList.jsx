import React from 'react'
import ColorCard from '../ColorCard/ColorCard'

const ColorCardList = () => {
    const colors = [
        {
            likes: 180,
            date: '18 hours',
            colors: [
                '#FFC5C5',
                '#FFEBD8',
                '#C7DCA7',
                '#89B9AD'
            ],
            id: 0
        },
        {
            likes: 180,
            date: '18 hours',
            colors: [
                '#FFC5C5',
                '#FFEBD8',
                '#C7DCA7',
                '#89B9AD'
            ],
            id: 1
        }
        
    ]
  return (
    <div>
        {colors.map(color =>(
            <ColorCard color={color} key={color.id}/>
        ))}
    </div>
  )
}

export default ColorCardList