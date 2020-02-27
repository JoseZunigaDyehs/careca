import React, { useContext, useState, useEffect } from 'react'

const CardContext = React.createContext()

function CardProvider({ children }) {
  const [state, setState] = useState({
    suitNames: {
      0: 'Diamons',
      1: 'Clubs', //Trebol
      2: 'Hearts',
      3: 'Spades', //Pica
      4: 'Diamons',
      5: 'Clubs', //Trebol
      6: 'Hearts',
      7: 'Spades', //Pica
    },
    cardTypes: {
      1: 'A',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: 'J',
      12: 'Q',
      13: 'K',
    },
    cards: null,
    cardsIds: [],
  })
  useEffect(() => {
    const { suitNames, cardTypes } = state
    function getCards() {
      const cards = {}
      const suits = [0, 13, 26, 39, 52, 65, 78, 91]
      const cardsIds = []
      //POR MAZO
      suits.forEach((suit, index) => {
        for (var i = 1; i < 14; i++) {
          const id = suit + i
          cards[id] = {
            id: id,
            name: cardTypes[i],
            suit: suitNames[index],
          }
          cardsIds.push(id)
        }
        const id = index + 53
        cards[id] = { id, name: 'Joker', suit: suitNames[index] }
        cardsIds.push(id)
      })
      debugger
      setState(prevState => ({
        ...prevState,
        cards,
        cardsIds,
      }))
    }
    getCards()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <CardContext.Provider value={{ ...state }}>{children}</CardContext.Provider>
  )
}

function useCard() {
  const context = useContext(CardContext)
  if (!context) {
    throw new Error(`useCard must be used within a CardProvider`)
  }
  return context
}

export { CardProvider, useCard }
