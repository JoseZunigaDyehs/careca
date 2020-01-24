import React, { useState } from 'react'
import { Container, Typography } from 'components'
import { useCard } from 'context'

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
      height="70%"
      justifyContent="center"
      alignItems="flex-end"
    >
      <Container>
        {handCardsIds.map((cardId, i) => (
          <Card key={i} id={cardId} type="hands" />
        ))}
      </Container>
      <Container position="absolute" right="0">
        {upBoardCardsIds.map((cardId, i) => (
          <Card key={i} id={cardId} type="upBoard" />
        ))}
      </Container>
      <Container position="absolute" left="0">
        {downBoardCardsIds.map((cardId, i) => (
          <Card key={i} id={cardId} type="downBoard" />
        ))}
      </Container>
    </Container>
  )
}

export default Cards
