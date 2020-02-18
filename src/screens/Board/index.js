import React, { useEffect, useReducer, useState } from 'react'
import { Container, Button, Typography } from 'components'
import { useCard } from 'context'
import Cards from './Cards'
import RestCards from './RestCards'
import { initialStates, reducer, actionTypes } from './reducer'
import { useAuth } from 'context'

// TODO: Each Players calc rotate
//Esto siempre será igual, hay que recorrer desde el jugador logueado
const playerStyles = {
  // From bottom to clock
  0: {
    bottom: '0',
    left: 'calc(50% - 9rem)',
  },
  1: {
    top: 'calc(50% - 3rem)',
    left: '-6rem',
    transform: 'rotate(90deg)',
  },
  2: {
    top: '0',
    left: 'calc(50% - 9rem)',
    transform: 'rotate(180deg)',
  },
  3: {
    top: 'calc(50% - 3rem)',
    right: '-6rem',
    transform: 'rotate(-90deg)',
  },
}

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
  return (
    <Container
      width="100%"
      height="100vh"
      justifyContent="center"
      backgroundColor="primary.0"
      position="relative"
    >
      {/* Uso el {i} para los estilos  */}
      {orderByLogged.map((player, i) => {
        const { name, crew, ...cards } = players[player]
        return (
          <Container
            height="6rem"
            width="18rem"
            position="absolute"
            justifyContent="center"
            alignItems="center"
            borderRadius="8px"
            padding="2"
            color="white"
            {...playerStyles[i]}
          >
            <Container
              width="100%"
              alignItems="center"
              justifyContent="space-around"
              flexDirection="column"
            >
              <Typography
                fontWeight="700"
                position="relative"
                //rotate={i === 2 ? '180deg' : 'none'}
              >
                {players[player].name}
              </Typography>
              <Typography
                fontSize="0"
                marginLeft="1"
                //rotate={i === 2 ? '180deg' : 'none'}
              >
                {players[player].crew}
              </Typography>
            </Container>
            <Cards player={i === 0} {...cards} />
          </Container>
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
