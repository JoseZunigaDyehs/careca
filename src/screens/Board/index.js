import React, { useEffect, useReducer } from 'react'
import { Container, Button, Typography } from 'components'
import { useCard } from 'context'
import Cards from './Cards'
import { initialStates, reducer, actionTypes } from './reducer'

//TODO: Si es error, cargar cartas al player
//TODO: minimo 4 cartas
//TODO: Generar altos para las cartas segun cantidad (styles)
//TODO: Mostrar cartas
//TODO: llenar jugadores
function Board() {
  const { cards, cardsIds } = useCard()
  const [state, dispatch] = useReducer(reducer, initialStates)

  useEffect(() => {
    dispatch({
      type: actionTypes.FILL_DATA,
      data: {
        cardsInBoardIds: cardsIds,
      },
    })
  }, [cards, cardsIds])
  const startBoard = () => {
    dispatch({ type: actionTypes.START_BOARD, cardsIds })
  }

  const changeTurn = () => {}

  const play = nextCardId => {
    dispatch({ type: actionTypes.PLAY, cards, nextCardId })
  }
  const { playersIds, players } = state
  const playerStyles = {
    0: {
      top: '0',
      left: 'calc(50% - 9rem)',
    },
    1: {
      top: 'calc(50% - 3rem)',
      left: '-6rem',
      transform: 'rotate(90deg)',
    },
    2: {
      bottom: '0',
      left: 'calc(50% - 9rem)',
    },
    3: {
      top: 'calc(50% - 3rem)',
      right: '-6rem',
      transform: 'rotate(-90deg)',
    },
  }
  return (
    <Container
      width="100%"
      height="100vh"
      justifyContent="center"
      backgroundColor="primary.0"
      position="relative"
    >
      {playersIds.map((player, i) => {
        const { name, crew, ...cards } = players[player]
        return (
          <Container
            height="6rem"
            width="18rem"
            position="absolute"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            borderRadius="8px"
            padding="2"
            color="white"
            {...playerStyles[i]}
          >
            <Container
              width="100%"
              alignItems="center"
              justifyContent="space-around"
            >
              <Typography fontWeight="700">{players[player].name}</Typography>
              <Typography fontSize="0" marginLeft="1">
                {players[player].crew}
              </Typography>
            </Container>
            <Cards {...cards} />
          </Container>
        )
      })}
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
    </Container>
  )
}

export default Board
