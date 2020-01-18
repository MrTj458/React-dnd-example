import React from 'react'

const Card = props => {
  const dragStart = e => {
    const target = e.target

    e.dataTransfer.setData('card_id', props.id)

    setTimeout(() => {
      target.style.display = 'none'
    }, 0)
  }

  const dragOver = e => {
    e.stopPropagation()
  }

  const dragEnd = e => {
    e.target.style.display = 'block'
  }

  return (
    <div
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
      onDragEnd={dragEnd}
    >
      {props.children}
    </div>
  )
}

export default Card
