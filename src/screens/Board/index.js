import React, { useEffect, useReducer, useState } from 'react'
import { Container, Button, Typography, BoardWrapper } from 'components'
import { useCard } from 'context'
import Cards from './Cards'
import Names from './Names'
import RestCards from './RestCards'
import { initialStates, reducer, actionTypes } from './reducer'
import { useAuth } from 'context'

//TODO: Si es error, cargar cartas al player
//TODO: minimo 4 cartas
//TODO: Generar altos para las cartas segun cantidad (styles)
//TODO: Mostrar cartas
//TODO: llenar jugadores
function Board() {
  const [orderByLogged, setOrderByLogger] = useState([])
  const { cards, cardsIds } = useCard()
  const [state, dispatch] = useReducer(reducer, initialStates)
  const {
    user: { id: idLogged },
  } = useAuth()
  const {
    playersIds,
    players,
    isPlaying,
    cardsInBoardIds,
    restCardsIds,
    cardPlayedId,
    playingId,
  } = state

  useEffect(() => {
    const indexLogged = playersIds.findIndex(id => id === idLogged)
    const nextOrderByLogged = []
    let isLoggedFinded = false
    //Desde el indexLogged para adelante
    for (let index = indexLogged; index < playersIds.length; index++) {
      nextOrderByLogged.push(playersIds[index])
    }
    //Hasta que se tope con el indexLogged
    for (let index = 0; index < indexLogged; index++) {
      nextOrderByLogged.push(playersIds[index])
    }
    setOrderByLogger(nextOrderByLogged)
  }, [])

  useEffect(() => {
    dispatch({
      type: actionTypes.FILL_DATA,
      data: {
        cardsInBoardIds: cardsIds,
      },
    })
  }, [cards, cardsIds])
  //Reparte cartas
  const startBoard = () => {
    dispatch({ type: actionTypes.START_BOARD, cardsIds })
  }
  const selectCard = id => {
    dispatch({ type: actionTypes.SELECT_CARD, id })
  }
  const played = nextCardId => {
    dispatch({ type: actionTypes.PLAYED, cards, nextCardId })
  }

  //TODO: Tengo los id de los jugadores y sus posiciones
  // Por Id de logueado le muestro sus cartas, si no las escondo
  // Del ID logueado hacia adelante se pintan los estilos
  // desde abajo hacia la manecilla del reloj
  console.log('state ===> ', state)
  return (
    <Container
      width="100%"
      height="100vh"
      justifyContent="center"
      backgroundColor="primary.0"
      position="relative"
    >
      {/* Uso el {i} como position para los estilos  */}
      {orderByLogged.map((player, i) => {
        const { name, crew, ...cards } = players[player]
        return (
          <BoardWrapper key={i} position={i}>
            <Container
              width="100%"
              alignItems="center"
              justifyContent="space-around"
              flexDirection="column"
            >
              <Names player={player} position={i} players={players} />
            </Container>
            {isPlaying && <Cards player={i === 0} {...cards} />}
          </BoardWrapper>
        )
      })}
      {!isPlaying ? (
        <Button
          position="absolute"
          bottom="calc(50% - 2rem)"
          right="calc(50% - 4rem)"
          width="8rem"
          height="4rem"
          display="flex"
          justifyContent="center"
          onClick={startBoard}
        >
          REPARTIR
        </Button>
      ) : (
        <RestCards
          restCardsIds={restCardsIds}
          cardsInBoardIds={cardsInBoardIds}
          cardPlayedId={cardPlayedId}
        />
      )}
    </Container>
  )
}

export default Board
