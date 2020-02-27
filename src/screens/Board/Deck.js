import React from 'react'
import { Container, Typography } from 'components'
import { useCard } from 'context'

//Mazo, distribuido por type
function Deck({
  type,
  cardsIdsInGame,
  cardPlayedId,
  isPlayerCards = false,
  backgroundColor = 'secondary.0',
  selectCard,
}) {
  const { cards, cardsIds } = useCard()
  if (type === 'restCardsIds' && cardsIdsInGame.length > 0) {
    return (
      <Container
        width={isPlayerCards ? '1.5rem' : '3rem'}
        height={isPlayerCards ? '3rem' : '6rem'}
        backgroundColor={backgroundColor}
      />
    )
  } else {
    return cardsIdsInGame.map((cardId, index) => {
      const { name, suit } = cards[cardId]
      if (cardPlayedId === cardId) {
        return (
          <Container
            width="3rem"
            height="6rem"
            backgroundColor="white"
            position="relative"
            zIndex="10"
            onClick={selectCard}
            key={index}
          >
            <Typography textStyle={suit}>{name}</Typography>
          </Container>
        )
      } else {
        return (
          <Container width="3rem" height="6rem" backgroundColor="secondary.0">
            {name}
          </Container>
        )
      }
    })
  }
}

export default Deck
