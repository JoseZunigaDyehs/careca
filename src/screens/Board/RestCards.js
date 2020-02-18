import React from 'react'
import Deck from './Deck'
import { Container } from 'components'

function RestCards({ restCardsIds, cardsInBoardIds, cardPlayedId }) {
  return (
    <Container
      position="absolute"
      bottom="calc(50% - 2rem)"
      right="calc(50% - 4rem)"
    >
      <Deck type="restCardsIds" cardsIdsInGame={restCardsIds} />
      <Deck
        type="cardsInBoardIds"
        cardsIdsInGame={cardsInBoardIds}
        cardPlayedId={cardPlayedId}
      />
    </Container>
  )
}

export default RestCards
