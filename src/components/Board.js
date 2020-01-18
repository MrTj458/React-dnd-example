import React from 'react'

import Card from './Card'

const Board = props => {
  const drop = e => {
    e.preventDefault()
    const card_id = e.dataTransfer.getData('card_id')
    const card = document.getElementById(card_id)
    card.style.display = 'block'

    props.moveCard(Number(card_id), props.id)
  }

  const dragOver = e => {
    e.preventDefault()
  }

  return (
    <div
      id={props.id}
      onDrop={drop}
      onDragOver={dragOver}
      className={props.className}
    >
      {props.cards.map(card => {
        return (
          <Card key={card.id} id={card.id} draggable={true} className="card">
            <p>{card.text}</p>
          </Card>
        )
      })}
    </div>
  )
}

export default Board
