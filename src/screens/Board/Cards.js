import React, { useState } from 'react'
import { Container, Typography } from 'components'
import { useCard } from 'context'
import Deck from './Deck'

//TODO: PASARLO A ESTILO EN TYPOGRAPHY (VARIANT)
const colorSuit = {
  Diamons: {
    color: 'error',
  },
  Clubs: {
    color: 'black',
  }, //Trebol
  Hearts: {
    color: 'error',
  },
  Spades: {
    color: 'black',
  }, //Pica
}

function Card({ id, type }) {
  const { cards } = useCard()
  const { name, suit } = cards[id]
  const Component = {
    hands: (
      <Container>
        <Typography {...colorSuit[suit]}>{name}</Typography>
      </Container>
    ),
    upBoard: (
      <Container>
        <Typography {...colorSuit[suit]}>{name}</Typography>
      </Container>
    ),
    //TODO: Estilo
    downBoard: (
      <Container backgroundColor="gray.3">
        <Typography color="gray.3">{name}</Typography>
      </Container>
    ),
  }
  return Component[type]
}

function Cards({ handCardsIds, upBoardCardsIds, downBoardCardsIds }) {
  return (
    <Container
      width="100%"
      position="relative"
      justifyContent="center"
      alignItems="flex-end"
    >
      <Container>
        <Deck
          backgroundColor={'black'}
          type="outCards"
          cardsIdsInGame={handCardsIds}
          isPlayerCards={true}
        />
      </Container>
      <Container position="absolute" right="0">
        {upBoardCardsIds.map((cardId, i) => (
          <Card key={i} id={cardId} type="upBoard" />
        ))}
      </Container>
      <Container position="absolute" left="0">
        <Deck
          isPlayerCards={true}
          backgroundColor={'gray.2'}
          type="outCards"
          cardsIdsInGame={downBoardCardsIds}
        />
      </Container>
    </Container>
  )
}

export default Cards
