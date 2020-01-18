import React, { useState } from 'react'

import Board from './components/Board'

const initialBoards = [
  {
    id: 1,
    cards: [
      {
        id: 1,
        text: 'One',
      },
      {
        id: 3,
        text: 'Three',
      },
    ],
  },
  {
    id: 2,
    cards: [
      {
        id: 2,
        text: 'Two',
      },
      {
        id: 5,
        text: 'Five',
      },
    ],
  },
  {
    id: 3,
    cards: [
      {
        id: 4,
        text: 'Four',
      },
      {
        id: 6,
        text: 'Six',
      },
    ],
  },
]

function App() {
  const [boards, setBoards] = useState(initialBoards)

  const moveCard = (cardId, boardId) => {
    const fromBoard = boards.find(board =>
      board.cards.find(card => card.id === cardId)
    )
    const card = fromBoard.cards.find(card => card.id === cardId)
    fromBoard.cards = fromBoard.cards.filter(card => card.id !== cardId)

    const newBoard = boards.find(board => board.id === boardId)
    newBoard.cards.push(card)

    const newBoards = boards.map(board => {
      if (board.id === fromBoard.id) {
        return fromBoard
      }

      if (board.id === newBoard.id) {
        return newBoard
      }

      return board
    })

    setBoards(newBoards)
  }

  return (
    <div>
      <main className="flexbox">
        {boards.map(board => {
          return (
            <Board
              key={board.id}
              id={board.id}
              className="board"
              cards={board.cards}
              moveCard={moveCard}
            />
          )
        })}
      </main>
    </div>
  )
}

export default App
