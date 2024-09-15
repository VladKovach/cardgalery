import React, { useState } from 'react'
import './cardComponent.css'
const CardComponent = ({ cards }) => {
  const [cardActiveList, setCardActiveList] = useState(Array(5).fill(false))
  const cardList = cards.map((card, index) => {
    card.active = cardActiveList[index]
    if (card.active) card.name = 'Aesthetics Piano'

    return (
      <div
        onClick={() => {
          const newActiveList = cardActiveList.map((act, indx) => (act = false))
          newActiveList[index] = true
          setCardActiveList(newActiveList)
        }}
        className={card.active ? 'cardItem active' : 'cardItem'}
        key={index}
        style={{ backgroundImage: `url(${card.src})` }}
      >
        <h3 className={card.active ? 'cardHeader active' : 'cardHeader'}>{card.name}</h3>
      </div>
    )
  }) 

  return <div className="cardComponent">{cardList}</div>
}

export default CardComponent
