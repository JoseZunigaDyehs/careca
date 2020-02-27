import React, { useState } from 'react'
import { Container, Typography } from 'components'
import { useCard } from 'context'
import Deck from './Deck'

function Card({ id, type }) {
  const { cards } = useCard()
  const { name, suit } = cards[id]
  const Component = {
    hands: (
      <Container>
        <Typography textStyle={suit}>{name}</Typography>
      </Container>
    ),
    upBoard: (
      <Container>
        <Typography textStyle={suit}>{name}</Typography>
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

function Cards({
  handCardsIds,
  upBoardCardsIds,
  downBoardCardsIds,
  player,
  selectCard,
}) {
  return (
    <Container
      width="100%"
      position="relative"
      justifyContent="center"
      alignItems="flex-end"
    >
      {/* Cartas del jugador */}
      {player && (
        <Container>
          <Deck
            backgroundColor={'white'}
            type="restCardsIds"
            cardsIdsInGame={handCardsIds}
            isPlayerCards={true}
            selectCard={selectCard}
          />
        </Container>
      )}
      <Container position="absolute" right="0">
        {upBoardCardsIds.map((cardId, i) => (
          <Card key={i} id={cardId} type="upBoard" />
        ))}
      </Container>
      <Container position="absolute" left="0">
        <Deck
          backgroundColor={'gray.3'}
          type="restCardsIds"
          cardsIdsInGame={downBoardCardsIds}
          isPlayerCards={true}
        />
      </Container>
    </Container>
  )
}

export default Cards
